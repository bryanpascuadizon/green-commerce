import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes"

export const modifyCart = (actionItem, newItem, isFromCart) => dispatch => {
    console.log(newItem[0].quantity)
    actionItem ?
        dispatch({
            type: ADD_TO_CART,
            payload: {
                newItem, isFromCart
            }
        }) :
        dispatch({
            type: REMOVE_FROM_CART,
            payload: {
                newItem, isFromCart
            }
        })
}

