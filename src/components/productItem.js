import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//CSS
import { Card, CardImg, CardText, CardTitle, Col } from 'reactstrap'
import '../assets/layout/productItem.css'

const ProductItem = ({ item }) => {

    const { name, description, img } = item;

    return (
        <Col xs="6" sm="6" lg="4" xl="3">
            <div className="product-item">
                <Link to={`/product/${name}`}>
                    <Card>
                        <CardImg
                            alt={name}
                            src={img}
                            top
                        />
                        <div className="card-info">
                            <CardTitle tag="h5">{name}</CardTitle>
                            <CardText tag="h6" className="product-desc">{description}</CardText>
                            <CardText tag="h6">P 150.00 (70g)</CardText>
                        </div>

                    </Card>
                </Link>
            </div>
        </Col>
    )
}

ProductItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ProductItem;