import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//COMPONENTS
import CartItem from "./cartItem";
import PageName from "./helper/pageName";
import Pagination from "./helper/pagination";

//ACTIONS
import { PAGINATE_CART } from '../actions/actionTypes'

//CSS
import { Row } from "reactstrap";
import "../assets/layout/cart.css";
import { paginate } from "../actions/helper/paginationaction";

const Cart = ({ cart, paginatedCart, paginate }) => {

  useEffect(() => {
    paginate(0, 4, PAGINATE_CART);
  }, [])

  if (cart.length > 0) {
    return (
      <div className="cart-container">
        <PageName pageName={"Cart"} />
        <Row>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Row>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        <PageName pageName={"Cart"} />
        <Row>
          <p style={{ textAlign: 'center' }}>You have no items in your cart</p>
        </Row>
      </div>)
  }
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  paginate: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cart: state.cartList.cart,
  paginatedCart: state.cartList.paginatedCart
});

export default connect(mapStateToProps, { paginate })(Cart);
