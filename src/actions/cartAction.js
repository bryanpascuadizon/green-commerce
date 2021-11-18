import { MODIFY_CART, REMOVE_FROM_CART } from "./actionTypes"

export const modifyCart = (actionItem, newItem, isFromCart) => dispatch => {

    dispatch({
        type: MODIFY_CART,
        payload: {
            newItem, isFromCart, actionItem
        }
    })
}

