import { GET_PRODUCTS } from '../actions/actionTypes'

const initialState = {
    products: []
}

const productsReducer = (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {

        case GET_PRODUCTS:
            
            return {
                ...state,
                products: [...state.products, ...payload]
            }

        default:
            return state
    }
}

export default productsReducer; 