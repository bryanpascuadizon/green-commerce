import React, { useEffect } from 'react'
import { Nav, NavLink } from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Navigation = ({ user }) => {

    useEffect(() => {
       
    }, [])
    
    return (
        <Nav>
            <NavLink>{user[0].userName}</NavLink>
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