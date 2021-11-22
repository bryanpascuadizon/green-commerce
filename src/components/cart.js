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
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cartList.cart,
});

export default connect(mapStateToProps, {})(Cart);
