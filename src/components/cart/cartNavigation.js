import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//CSS
import { Card, Col, Input, Row } from 'reactstrap';
import '../../assets/layout/cartNavigation.css';

/*
  TO DO:
    1. In the cart component, create the CheckAll function as a prop for cart navigation
    2. Create a state in the cart component where checked ad unchecked. it will aslo be used a a prop for cart item
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

const CartNavigation = ({ selectAll, isSelectAll }) => {

    return (
        <Card className="cart-navigation">
            <Row>
                <Col xs={10}>
                    <Input type="checkbox" checked={isSelectAll} id="cart-check-all" onChange={selectAll} />
                </Col>
                <Col xs={2}>
                    <h5>Delete</h5>
                </Col>
            </Row>

        </Card>
    )
}

CartNavigation.propTypes = {
    selectAll: PropTypes.func.isRequired,
    isSelectAll: PropTypes.bool.isRequired
}

export default connect(null, { })(CartNavigation);