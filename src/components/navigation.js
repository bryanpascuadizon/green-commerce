import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//COMPONENT
import CartCounter from './helper/cartCounter'

//CSS
import { Nav, NavbarText, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

const Navigation = ({ user }) => {

    useEffect(() => {

    }, [])

    return (
        <Nav>
            <NavbarText><Link to="/">{user[0].userName}</Link></NavbarText>
            <NavbarText>
                <CartCounter />
            </NavbarText>
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