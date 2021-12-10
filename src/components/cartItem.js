import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//COMPONENT
import QuantityCounter from "./helper/quantityCounter";

//ACTIONS
import { modifyCart, removeFromCart } from "../actions/cartAction";

//CSS
import { Card, Col, CardText, CardImg, Row } from "reactstrap";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartItem = ({ item, modifyCart, removeFromCart }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  const accumulate = (action) => {
    const newItem = [item];

    if (action) {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      } else {
        return;
      }
    }

    modifyCart(action, newItem, true);
  };

  const remove = (id) => {

    removeFromCart(id);
  };

  return (
    <Card>
      <Row>
        <Col className="cart-image" xs={12} sm={3}>
          <CardImg src={item.img}></CardImg>
        </Col>
        <Col className="cart-details" xs={12} sm={3}>
          <CardText tag="h5">{item.name}</CardText>
          <CardText tag="p">({item.description})</CardText>
          <RiDeleteBin5Line
            className="delete-cart-item"
            title="Remove from cart"
            onClick={() => remove(item.id, quantity)}
          />
        </Col>
        <Col xs={12} sm={3}>
          <CardText tag="h5">Quantity</CardText>
          <QuantityCounter quantity={quantity} accumulate={accumulate} />
        </Col>
        <Col xs={12} sm={3} className="cart-price">
          <CardText tag="h5">Price</CardText>
          <CardText tag="p">P 150/70g</CardText>
        </Col>
      </Row>
    </Card>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  modifyCart: PropTypes.func.isRequired,
};

export default connect(null, { modifyCart, removeFromCart })(CartItem);
