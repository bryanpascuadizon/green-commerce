import { combineReducers } from "redux";
import products from './productsReducer'

export default combineReducers({
    productList: products
});