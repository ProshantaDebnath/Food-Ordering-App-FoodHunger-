const express = require('express');
const db = require('./db')
const Foods = require('./models/foodModel')

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

const path = require('path')
const foodsRoute = require('./routes/foodsRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')



app.use('/api/pizzas/', foodsRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)

if(process.env.NODE_ENV ==='production'){

    app.use('/', express.static('client/build'))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    })
}


// app.get("/", (req,res) =>{
//     res.send("Server is workin on " + port )
// })

app.listen(port, ()=>{
    console.log("server is running on " + port)
})