import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//COMPONENTS
import CartItem from './cartItem'

//CSS
import { Row } from 'reactstrap';
import '../assets/layout/cart.css'

const Cart = ({ cart }) => {

    useEffect(() => {

    }, [])

    return (
        <Row className="cart-container">
            {
                cart.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            }

        </Row>
    )
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    cart: state.cartList.cart
})

export default connect(mapStateToProps, {})(Cart);