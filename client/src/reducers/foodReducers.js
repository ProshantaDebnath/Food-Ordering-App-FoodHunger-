export const getAllFoodsReducer = (state = { pizzas: [] }, action) => {

    switch (action.type) {
        case 'GET_FOODS_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_FOODS_SUCCESS': return {
            loading: false,
            pizzas: action.payload
        }
        case 'GET_FOODS_FAILED': return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}


export const addItemReducer = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_ITEM_REQUEST': return {
            loading: true,
            ...state
        }
        case 'ADD_ITEM_SUCCESS': return {
            loading: false,
            success: true,
        }
        case 'ADD_ITEM_FAILED': return {
            error: action.payload, 
            loading: false,
        }
        default: return state
    }
}