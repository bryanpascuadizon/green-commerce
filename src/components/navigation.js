import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//COMPONENT
import CartCounter from './helper/cartCounter'

//CSS
import { Nav, NavbarBrand, NavbarText, NavItem } from 'reactstrap'
import '../assets/layout/navigation.css'

const Navigation = ({ user }) => {

    useEffect(() => {

    }, [])

    return (
        <Nav className="navigation-container">
            <Link to="/">
                <NavbarBrand>Garden Shop</NavbarBrand>
            </Link>
            <NavItem className="navigation-counter">
                <CartCounter />
            </NavItem>
        </Nav>
    )
}

Navigation.propTypes = {
    user: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    user: state.authList.user,
})

export default connect(mapStateToProps, {})(Navigation);