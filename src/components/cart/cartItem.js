import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//COMPONENT
import QuantityCounter from "../helper/quantityCounter";
import CartConfirmRemove from "./cartConfirmRemove";

//ACTIONS
import { modifyCart, toCheckCartItem } from "../../actions/cartAction";

//CSS
import { Card, Col, CardText, CardImg, Row, Input } from "reactstrap";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartItem = ({ item, modifyCart, toCheckCartItem }) => {
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

  /*
  TO DO:
    1. Create a navbar above the cart list that consist of:
      - 'Check All' checkbox
      - Product name
      - Quantity
      - Price
      - Action
    2. The 'Check All' checkbox should check all the items in the cart list. 
        Note: After an item is checked, its state should be change so that it will be subject for removal.
    3. Create a remove button that will remove all checked items in the cart list.
  */

  return (
    <Card>
      <Row>
        <Col className="cart-checker" xs={12} sm={1}>
          <Input type="checkbox" onChange={(e) => toCheckCartItem(item.id, e.target.checked)} />
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
  toCheckCartItem: PropTypes.func.isRequired
};

export default connect(null, { modifyCart, toCheckCartItem })(CartItem);
