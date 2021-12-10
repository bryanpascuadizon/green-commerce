import { LOAD_PRODUCTS, GET_PRODUCT, ADD_REVIEW, PRODUCT_CONFIRMATION  } from "./actionTypes";
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

export const addReview = (review) => (dispatch) => {

  dispatch({
    type: ADD_REVIEW,
    payload: review
  })
}

export const toConfirmProduct = (action) => (dispatch) => {

  dispatch({
    type: PRODUCT_CONFIRMATION,
    payload: action
  })
}
