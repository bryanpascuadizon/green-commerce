import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//COMPONENTS
import CartItem from "./cartItem";
import PageName from "./helper/pageName";

//CSS
import { Row } from "reactstrap";
import "../assets/layout/cart.css";

const Cart = ({ cart }) => {
  useEffect(() => {}, []);

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
};

const mapStateToProps = (state) => ({
  cart: state.cartList.cart,
});

export default connect(mapStateToProps, {})(Cart);
