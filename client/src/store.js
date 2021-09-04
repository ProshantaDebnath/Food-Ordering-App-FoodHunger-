import { combineReducers } from 'redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllFoodsReducer,addItemReducer } from './reducers/foodReducers';
import { cartReducer } from './reducers/cartReducer'
import { getAllUsersReducer, loginUserReducer, registerUserReducer } from './reducers/userReducer';
import { placeOrderReducer, getUserOrdersReducer,getAllOrdersReducer } from './reducers/OrderReducer';

const finalReducer = combineReducers({
    getAllFoodsReducer: getAllFoodsReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    getAllUsersReducer: getAllUsersReducer
    
    

})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initalState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer: {
        currentUser: currentUser
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initalState, composeEnhancers(applyMiddleware(thunk)))

export default store;