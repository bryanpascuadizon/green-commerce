//ACTION TYPES
import { MODIFY_CART, REMOVE_FROM_CART, TO_SELECT_CART_ITEM, TO_SELECT_ALL_CART_ITEM } from "./actionTypes";

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

export const toSelectCartItem = (id, isSelected) => dispatch => {

  dispatch({
    type: TO_SELECT_CART_ITEM,
    payload: {
      id,
      isSelected
    }
  });

}

export const toSelectAllAllCartItem = (action) => dispatch => {

  dispatch({
    type: TO_SELECT_ALL_CART_ITEM,
    payload: action
  });


}
