import React from "react";

import { connect } from "react-redux";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { logout as logoutAction } from "../../redux/actions";

const TopNav = ({ logout }) => (
  <Navbar fixed>
    <NavbarBrand href="/">Book Order App</NavbarBrand>
    <Nav className="ml-auto">
      <NavItem>
        <NavLink className="nav-link" to="/order">
          Order
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/book">
          Book
        </NavLink>
      </NavItem>
      <NavItem>
        <Button color="danger" outline onClick={() => logout()}>
          Logout
        </Button>
      </NavItem>
    </Nav>
  </Navbar>
);

export default connect(
  null,
  { logout: logoutAction }
)(TopNav);
