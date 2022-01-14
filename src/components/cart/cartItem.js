import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//COMPONENT
import QuantityCounter from "../helper/quantityCounter";
import CartConfirmRemove from "./cartConfirmRemove";

//ACTIONS
import { modifyCart, toSelectCartItem } from "../../actions/cartAction";

//CSS
import { Card, Col, CardText, CardImg, Row, Input } from "reactstrap";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartItem = ({ item, modifyCart, toSelectCartItem, isSelected }) => {

  const [quantity, setQuantity] = useState(0);
  const [confirmRemoveItem, setComfirmRemoveItem] = useState(false);

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

  const confirmRemoveModal = () => {
    setComfirmRemoveItem(!confirmRemoveItem)
  }

  const checkCartItem = (e) => {
    toSelectCartItem(item.id, e.target.checked);

  }

  return (
    <Card>
      <Row>
        <Col className="cart-checker" xs={12} sm={1}>
          <Input type="checkbox" name="isChecked" checked={isSelected} onChange={checkCartItem} />
        </Col>
        <Col className="cart-image" xs={12} sm={2}>
          <CardImg src={item.img}></CardImg>
        </Col>
        <Col className="cart-details" xs={12} sm={3}>
          <CardText tag="h5">{item.name}</CardText>
        </Col>
        <Col xs={12} sm={2}>
          <QuantityCounter quantity={quantity} accumulate={accumulate} />
        </Col>
        <Col xs={12} sm={2} className="cart-price">
          <CardText tag="h5">P 150/70g</CardText>
        </Col>
        <Col className="cart-actions" xs={12} sm={1}>
          <RiDeleteBin5Line
            className="delete-cart-item"
            title="Remove from cart"
            onClick={confirmRemoveModal}
          />
        </Col>
      </Row>

      <CartConfirmRemove confirmRemoveItem={confirmRemoveItem} openCloseModal={confirmRemoveModal} cartItemId={item.id} />
    </Card>

  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  modifyCart: PropTypes.func.isRequired,
  toSelectCartItem: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default connect(null, { modifyCart, toSelectCartItem })(CartItem);
