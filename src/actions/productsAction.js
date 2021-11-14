import { GET_PRODUCTS } from "./actionTypes"

export const loadProducts = (productsList) => dispatch => {
    dispatch({
        type: GET_PRODUCTS,
        payload: productsList
    })
}