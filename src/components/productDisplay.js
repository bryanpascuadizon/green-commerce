import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

//ACTIONS
import { getProduct } from '../actions/productsAction'
import { modifyCart } from '../actions/cartAction'

//CSS
import { Row, Col, Card, CardImg, CardText, ButtonGroup, Button } from 'reactstrap';
import '../assets/layout/productDisplay.css'

const ProductDisplay = ({ getProduct, modifyCart, item, cart }) => {

    const { name } = useParams();

    const [quantity, setQuantity] = useState(1);

    const accumulate = (action) => {

        if (action) {
            setQuantity(quantity + 1)
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        }
    }

    const submitCart = () => {

        const newItem = item;

        newItem[0].quantity = quantity;

        modifyCart(true, newItem, false);
    }

    useEffect(() => {

        getProduct(name);

    }, [])

    return (
        <div>
            <Card className="item-display-container">
                {
                    item.map(element =>
                        <Row key={element.name}>
                            <Col xs={12} sm={5}>
                                <CardImg src={element.img}></CardImg>
                            </Col>
                            <Col xs={12} sm={7}>
                                <CardText tag="h6">Name</CardText>
                                <CardText tag="h5">{element.name}</CardText>
                                <CardText tag="h6">Taste</CardText>
                                <CardText tag="h5">{element.description}</CardText>
                                <CardText className="info">{element.info}</CardText>
                                <div>
                                    <CardText tag="h6">Quantity</CardText>
                                    <div className="accumulator">
                                        <Button id="decrease" onClick={() => accumulate(false)}>
                                            -
                                        </Button>
                                        <CardText>
                                            {quantity}
                                        </CardText>
                                        <Button id="increase" onClick={() => accumulate(true)}>
                                            +
                                        </Button>
                                    </div>
                                </div>
                                <Row className="action">
                                    <Col xs={6}>
                                        <Button id="add-to-cart" onClick={() => submitCart()}>Add To Cart</Button>
                                    </Col>
                                    <Col xs={6}>
                                        <Link to="/"><Button id="cancel">Back</Button></Link>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    )
                }
            </Card>
            <Card className="item-reviews-container">
                {cart.length > 0 ? cart[0].quantity : ''}
            </Card>
        </div>
    )

}

ProductDisplay.propTypes = {
    getProduct: PropTypes.func.isRequired,
    modifyCart: PropTypes.func.isRequired,
    item: PropTypes.array.isRequired,
    cart: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    item: state.productList.item,
    cart: state.cartList.cart
})

export default connect(mapStateToProps, { getProduct, modifyCart })(ProductDisplay);