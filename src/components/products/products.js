import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import microgreens from '../../assets/data/microgreens'

//COMPONENTS
import ProductItem from './productItem'
import PageName from '../helper/pageName'
import Pagination from '../helper/pagination'

//ACTIONS
import { PAGINATE_PRODUCTS } from '../../actions/actionTypes'
import { loadProducts } from '../../actions/productsAction'
import { paginate } from '../../actions/helper/paginationaction'


//CSS
import { Row } from 'reactstrap'


const Products = ({ products, loadProducts, paginate, paginatedProducts }) => {

    useEffect(() => {

        loadProducts(microgreens);

        paginate(0, 8, PAGINATE_PRODUCTS);

    }, []);

    return (
        <div className="products-container">
            <PageName pageName={"Products"} />
            <Row>
                {
                    paginatedProducts.map(product => (<ProductItem key={product.id} prodItem={product} />))
                }
            </Row>
            <Pagination itemsPerPage={8} totalItems={products.length} pageComponent={PAGINATE_PRODUCTS}/>
        </div>
    )
}

Products.propTypes = {
    loadProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    paginatedProducts: PropTypes.array.isRequired,
    paginate: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    products: state.productList.products,
    paginatedProducts: state.productList.paginatedProducts
})

export default connect(mapStateToProps, { loadProducts, paginate })(Products);