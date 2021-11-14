import { GET_PRODUCTS } from '../actions/actionTypes'

const initialState = {
    products: []
}

export default (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {

        case GET_PRODUCTS:
            console.log(payload);
            return {
                ...state,
                products: [...state.products, ...payload]
            }

        default:
            return state
    }
}