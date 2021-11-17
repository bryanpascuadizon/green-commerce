import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//COMPONENT
import CartCounter from './helper/cartCounter'

//CSS
import { Nav, NavLink } from 'reactstrap'

const Navigation = ({ user }) => {

    useEffect(() => {
       
    }, [])
    
    return (
        <Nav>
            <NavLink>{user[0].userName}</NavLink>
            <NavLink>
                <CartCounter />
            </NavLink>
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