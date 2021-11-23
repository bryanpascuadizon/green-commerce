import { LOAD_PRODUCTS, GET_PRODUCT } from "./actionTypes";
import reviews from "../assets/data/review.js";

export const loadProducts = (productsList) => (dispatch) => {
  dispatch({
    type: LOAD_PRODUCTS,
    payload: productsList,
  });
};

export const getProduct = (id) => (dispatch) => {
  const allReviews = reviews.filter((review) => review.productId === id);

  dispatch({
    type: GET_PRODUCT,
    payload: {
      id,
      allReviews,
    },
  });
};
