import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

//COMPONENT
import QuantityCounter from './helper/quantityCounter'

//ACTIONS
import { modifyCart } from '../actions/cartAction';

//CSS
import { Card, Col, CardText, CardImg, Row } from 'reactstrap'

const CartItem = ({ item, modifyCart }) => {

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {

        setQuantity(item.quantity);

    }, [])

    const accumulate = (action) => {

        const newItem = [item]

        console.log(newItem)

        if (action) {
            setQuantity(quantity + 1)
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            } else {
                return;
            }
        }

        modifyCart(action, newItem, true);
    }

    return (
        <Card>
            <Row>
                <Col className="cart-image" xs={2}>
                    <CardImg src={item.img}></CardImg>
                </Col>
                <Col className="cart-details" xs={7}>
                    <CardText tag="h5">{item.name}</CardText>
                    <CardText tag="p">({item.description})</CardText>
                    <CardText tag="h6">{item.info}</CardText>
                </Col>
                <Col xs={3}>
                    <CardText tag="h5">Quantity</CardText>
                    <QuantityCounter quantity={quantity} accumulate={accumulate} />
                </Col>
            </Row>
        </Card>
    )
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    modifyCart: PropTypes.func.isRequired
}

export default connect(null, { modifyCart })(CartItem);