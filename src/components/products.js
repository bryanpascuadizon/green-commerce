import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'
import microgreens from '../assets/data/microgreens'

//COMPONENTS
import ProductItem from './productItem'
import PageName from './helper/pageName'

//ACTIONS
import { loadProducts } from '../actions/productsAction'

//CSS
import { Row } from 'reactstrap'

const Products = ({ products, loadProducts }) => {

    useEffect(() => {

        loadProducts(microgreens)

    }, [loadProducts]);

    return (
        <div className="products-container">
            <PageName pageName={"Products"}/>
            <Row>
                {
                    products.map(product => (<ProductItem key={uuid()} prodItem={product} />))
                }
            </Row>
        </div>
    )
}

Products.propTypes = {
    loadProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    products: state.productList.products
})

export default connect(mapStateToProps, { loadProducts })(Products);