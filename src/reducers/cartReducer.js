import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes"

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case ADD_TO_CART:

            const findItem = state.cart.find(cartItem => cartItem.id === payload.newItem[0].id);

            console.log(payload.newItem[0])
            console.log(findItem)

            if (findItem) {
                if (payload.isFromCart) {
                    findItem.quantity += 1;
                } else {
                    findItem.quantity += payload.newItem[0].quantity;
                }

                return {
                    ...state,
                    cart: state.cart.map(cartItem => cartItem.id === findItem.id ? cartItem = findItem : cartItem)
                }
            } else {

                return {
                    ...state,
                    cart: [...state.cart, payload.newItem[0]]
                }
            }

        case REMOVE_FROM_CART:

            return {
                ...state
            }

        default:
            return state
    }
}

export default cartReducer;