import { LOAD_PRODUCTS, GET_PRODUCT } from '../actions/actionTypes'

const initialState = {
    products: [],
    item: []
}

const productsReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case LOAD_PRODUCTS:
            return {
                ...state,
                products: [...state.products, ...payload],
                item: []
            }

        case GET_PRODUCT:
            const getItem = state.products.filter(product => product.name === payload)

            return {
                ...state,
                item: [...getItem]
            }

        default:
            return state
    }
}

export default productsReducer;