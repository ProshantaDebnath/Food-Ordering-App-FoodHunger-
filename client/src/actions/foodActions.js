import axios from 'axios';
export const getAllFoods = () => async dispatch => {
    dispatch({ type: 'GET_FOODS_REQUEST' })

    try {
        const response = await axios.get('/api/pizzas/getallfoods')
        console.log(response);
        dispatch({ type: 'GET_FOODS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_FOODS_FAILED', payload: error })
    }

}


export const filterFoods = (searchKey, category) => async dispatch => {

    var filteredFoods;
    dispatch({ type: 'GET_FOODS_REQUEST' })

    try {
        const response = await axios.get('/api/pizzas/getallfoods')

        filteredFoods = response.data.filter(food => food.name.includes(searchKey))
        // filteredFoods = response.data.filter(food=>food.name.includes(searchKey))
        // filteredFoods = response.data.filter(food=>food.name.toLowerCase().includes(searchKey))

        if(category!='all'){
            filteredFoods = response.data.filter(food=>food.category.toLowerCase()==category)

        }

        dispatch({ type: 'GET_FOODS_SUCCESS', payload: filteredFoods })
    } catch (error) {
        dispatch({ type: 'GET_FOODS_FAILED', payload: error })
    }

}


export const addItem=(food)=> async dispatch=>{

    dispatch({type: 'ADD_ITEM_REQUEST'})

    try {
        const response = await axios.post('/api/pizzas/additem', {food})
        console.log(response)
        dispatch({type:'ADD_ITEM_SUCCESS'})
    } catch (error) {
        dispatch({type : 'ADD_ITEM_FAILED', payload : error})
    }

}


export const deleteItem = (itemid) => async dispatch =>{

    try {
        const response = await axios.post('/api/pizzas/deleteitem', {itemid})
        alert('Item deleted successfull')
        console.log(response)
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error)
        
    }

}