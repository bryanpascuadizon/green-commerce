import { combineReducers } from "redux";
import cart from "./cartReducer";
import products from './productsReducer'
import auth from "./authReducer";

export default combineReducers({
    productList: products,
    cartList: cart,
    authList: auth
});