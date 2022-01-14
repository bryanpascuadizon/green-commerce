import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//COMPONENTS
import CartItem from "./cartItem";
import PageName from "../helper/pageName";
import CartNavigation from "./cartNavigation";

//ACTIONS
import { toSelectAllAllCartItem } from '../../actions/cartAction';

//CSS
import { Row } from "reactstrap";
import "../../assets/layout/cart.css";
import { paginate } from "../../actions/helper/paginationaction";

const Cart = ({ cart, toSelectAllAllCartItem }) => {

  useEffect(() => {
    checkSelectedItems();

  }, [cart])

  const [isSelectAll, setIsSelectAll] = useState(false);

  const selectAll = (event) => {
    toSelectAllAllCartItem(event.target.checked);
    setIsSelectAll(event.target.checked)
  }

  const checkSelectedItems = () => {
    let checkForNotSelected = cart.find(item => item.isSelected === false);

    if(checkForNotSelected) {
      setIsSelectAll(false)
    } else {
      setIsSelectAll(true)
    }

    //checkForNotSelected === null ? setIsSelectAll(true) : setIsSelectAll(false);
  }

  if (cart.length > 0) {
    return (
      <div className="cart-container">
        <PageName pageName={"Cart"} />
        <Row>
          <CartNavigation selectAll={selectAll} isSelectAll={isSelectAll} />
          {cart.map((item) => (
            <CartItem key={item.id} item={item} isSelected={item.isSelected} />
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
  paginate: PropTypes.func.isRequired,
  toSelectAllAllCartItem: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cart: state.cartList.cart,
});

export default connect(mapStateToProps, { toSelectAllAllCartItem })(Cart);
