import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import microgreens from '../assets/data/microgreens'
import PropTypes from 'prop-types'

//ACTIONS
import { loadProducts } from '../actions/productsAction'

//COMPONENTS
import Products from './products'

const Home = ({ loadProducts }) => {

    useEffect(() => {

        loadProducts(microgreens);

    }, [loadProducts]);

    return (
        <div className="container">
            <Products />
        </div>

    )
}

Home.propTypes = {
    loadProducts: PropTypes.func.isRequired
}

export default connect(null, { loadProducts })(Home);