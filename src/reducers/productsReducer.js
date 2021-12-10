import { LOAD_PRODUCTS, GET_PRODUCT, ADD_REVIEW, PRODUCT_CONFIRMATION } from "../actions/actionTypes";

const initialState = {
  products: [],
  item: [],
  reviews: [],
  showProductConfirmation: false
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
        showProductConfirmation: false
      };

    case GET_PRODUCT:
      const getItem = state.products.filter(
        (product) => product.id === payload.id
      );

      return {
        ...state,
        item: [...getItem],
        reviews: [...payload.allReviews],
        showProductConfirmation: false
      };

    case ADD_REVIEW:
      return {
        ...state,
        reviews: [payload, ...state.reviews]
      }

    case PRODUCT_CONFIRMATION: {
      return {
        ...state,
        showProductConfirmation: payload
      }
    }

    default:
      return state;
  }
};

export default productsReducer;
