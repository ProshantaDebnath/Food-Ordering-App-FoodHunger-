const express = require('express');
const router = express.Router();

const Foods = require('../models/foodModel')

router.get("/getallfoods", async (req, res) => {

    try {
        const pizzas = await Foods.find({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({ message: error });

    }
})


router.post("/additem", async (req,res)=>{
    
    const food = req.body.food

    try {
        const newitem = new Foods({
            name: food.name,
            image : food.image,
            varients : ['Half', 'Full'],
            description : food.description,
            category : food.category,
            prices : [food.prices]
        })
        await newitem.save()
        res.send('New Item added successfully')
    } catch (error) {
       return res.status(400).json({message : 'Not added' +error}) 
    }
})


router.post("/deleteitem", async (req, res)=>{
    const itemid = req.body.itemid
    
    try {
        await Foods.findOneAndDelete({_id : itemid})
        res.send("Item deleted successfully")
    } catch (error) {
        return res.status(400).json({ message : error})
    }
})

module.exports = router;