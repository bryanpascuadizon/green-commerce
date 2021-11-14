import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'

//COMPONENTS
import ProductItem from './productItem'

//CSS
import { Row } from 'reactstrap'

const Products = ({ products }) => {

    useEffect(() => {
        console.log(products)
    }, [products])
    return (
        <div className="products-container">
            <Row>
                {
                    products.map(product => (<ProductItem key={uuid()} item={product} />))
                }
            </Row>
        </div>
    )
}

Products.propTypes = {
    products: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    products: state.productList.products
})

export default connect(mapStateToProps)(Products);