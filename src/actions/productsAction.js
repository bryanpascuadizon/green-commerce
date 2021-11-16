import { LOAD_PRODUCTS, GET_PRODUCT } from "./actionTypes"

export const loadProducts = (productsList) => dispatch => {
    dispatch({
        type: LOAD_PRODUCTS,
        payload: productsList
    })
}

export const getProduct = (name) => dispatch => {
    dispatch({
        type: GET_PRODUCT,
        payload: name
    })
}