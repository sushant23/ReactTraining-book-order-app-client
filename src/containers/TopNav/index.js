import React from "react";

import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const TopNav = () => (
  <Navbar fixed>
    <NavbarBrand href="/">Book Order App</NavbarBrand>
    <Nav className="ml-auto">
      <NavItem>
        <NavLink className="nav-link" to="/order">Order</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/book">Book</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default TopNav;
