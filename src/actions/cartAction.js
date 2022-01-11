import axios from "axios";

//ACTION TYPES
import { MODIFY_CART, REMOVE_FROM_CART } from "./actionTypes";

//ACTION
import { showProcessing } from "./authaction";
import { toConfirmProduct } from "./productsAction";

export const modifyCart = (actionItem, newItem, isFromCart) => (dispatch) => {

  dispatch(showProcessing(true));

  dispatch({
    type: MODIFY_CART,
    payload: {
      newItem,
      isFromCart,
      actionItem,
    },
  });

  dispatch(showProcessing(false));

  dispatch(toConfirmProduct(true));

};

export const removeFromCart = (id) => dispatch => {
  console.log(id)

  dispatch(showProcessing(true));

  dispatch({
    type: REMOVE_FROM_CART,
    payload: id
  })

  dispatch(showProcessing(false));
}
