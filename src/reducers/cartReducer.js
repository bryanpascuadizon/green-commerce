import { MODIFY_CART, REMOVE_FROM_CART } from "../actions/actionTypes";

const initialState = {
  cart: [],
  showCartConfirmation: false
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MODIFY_CART:
      const findItem = state.cart.find(
        (cartItem) => cartItem.id === payload.newItem[0].id
      );

      if (findItem) {
        if (payload.actionItem) {
          if (payload.isFromCart) {
            findItem.quantity += 1;
          } else {
            findItem.quantity += payload.newItem[0].quantity;
          }
        } else {
          if (payload.isFromCart) {
            findItem.quantity -= 1;
          }
        }

        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.id === findItem.id ? (cartItem = findItem) : cartItem
          ),
          showCartConfirmation: payload.isFromCart ? true : false
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, payload.newItem[0]],
          showCartConfirmation: payload.isFromCart ? true : false
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
