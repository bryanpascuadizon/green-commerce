import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import microgreens from '../assets/data/microgreens'
import PropTypes from 'prop-types'

//ACTIONS
import { loadProducts } from '../actions/productsAction'

const Home = ({ loadProducts }) => {

    useEffect(() => {

        loadProducts(microgreens);

    }, [loadProducts]);

    return (
        <div>

        </div>

    )
}

Home.propTypes = {
    loadProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    products: state.productList.products
});

export default connect(mapStateToProps, { loadProducts })(Home);