import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//COMPONENT
import CartCounter from "./helper/cartCounter";

//CSS
import { Nav, NavbarBrand, NavItem } from "reactstrap";
import "../assets/layout/navigation.css";

const Navigation = ({ user }) => {
  useEffect(() => { }, []);

  return (
    <Nav className="navigation-container">
      <NavbarBrand href="/">Garden Shop</NavbarBrand>
      <NavItem className="navigation-counter">
        <CartCounter />
      </NavItem>
    </Nav>
  );
};

Navigation.propTypes = {
  user: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.authList.user,
});

export default connect(mapStateToProps, {})(Navigation);
