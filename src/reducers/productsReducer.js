import { LOAD_PRODUCTS, GET_PRODUCT, ADD_REVIEW } from "../actions/actionTypes";

const initialState = {
  products: [],
  item: [],
  reviews: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: [...payload],
        item: [],
        reviews: [],
      };

    case GET_PRODUCT:
      const getItem = state.products.filter(
        (product) => product.id === payload.id
      );

      return {
        ...state,
        item: [...getItem],
        reviews: [...payload.allReviews],
      };

    case ADD_REVIEW:
      return{
        ...state,
        reviews: [payload, ...state.reviews]
      }

    default:
      return state;
  }
};

export default productsReducer;
