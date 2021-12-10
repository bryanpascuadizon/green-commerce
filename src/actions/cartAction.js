import axios from "axios";

//ACTION TYPES
import { MODIFY_CART, REMOVE_FROM_CART } from "./actionTypes";

//ACTION
import { showProcessing } from "./authaction";

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

  setTimeout(() => dispatch(showProcessing(false)), 500);

};

export const removeFromCart = (id) => dispatch => {

  dispatch(showProcessing(true));

  dispatch({
    type: REMOVE_FROM_CART,
    payload: id
  })

  setTimeout(() =>dispatch(showProcessing(false)), 500);
}
