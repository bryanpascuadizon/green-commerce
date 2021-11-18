import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const CartCounter = ({ cart }) => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {

        let totalQuantity = 0;
        let getQuantities = [];

        if (cart.length > 0) {

            cart.map((item) => getQuantities.push(item.quantity));

            totalQuantity = getQuantities.reduce((total, item) => total + item);

            setCounter(totalQuantity);

        }

    }, [cart])

    return (
        <Link to="/cart">
            <div className="cart-counter-container">
                <span className="cart-counter-icon"></span>
                <span className="cart-counter">{counter}</span>
            </div>
        </Link>
    )
}

CartCounter.propTypes = {
    cart: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    cart: state.cartList.cart
})

export default connect(mapStateToProps, {})(CartCounter);

