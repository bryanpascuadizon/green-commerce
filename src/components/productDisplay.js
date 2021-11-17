import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

//ACTIONS
import { getProduct } from '../actions/productsAction'
import { modifyCart } from '../actions/cartAction'

//CSS
import { Row, Col, Card, CardImg, CardText, Button } from 'reactstrap';
import '../assets/layout/productDisplay.css'

const ProductDisplay = ({ getProduct, modifyCart, item }) => {

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

    const submitCart = (event) => {

        event.preventDefault();

        const newItem = [{
            id: item[0].id,
            name: item[0].name,
            description: item[0].description,
            isAvailable: item[0].isAvailable,
            info: item[0].info,
            img: item[0].img,
            quantity: quantity,
        }]

        modifyCart(true, newItem, false);
    }

    useEffect(() => {

        getProduct(name);

    }, [getProduct, name])

    return (
        <div>
            <form onSubmit={submitCart}>
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
                                            <Button id="add-to-cart" type="submit">Add To Cart</Button>
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
            </form>
            <Card className="item-reviews-container">
                Reviews
            </Card>
        </div>
    )
}

ProductDisplay.propTypes = {
    getProduct: PropTypes.func.isRequired,
    modifyCart: PropTypes.func.isRequired,
    item: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    item: state.productList.item,
})

export default connect(mapStateToProps, { getProduct, modifyCart })(ProductDisplay);