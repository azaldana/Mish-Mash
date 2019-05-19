import React from "react";
import "./style.css";
import { Navbar, NavItem } from 'react-materialize';

const NavBar = props => {
    const { handleSignUpClick } = props;
    const { handleLoginClick } = props;
    return (
        <Navbar brand={<a />} alignLinks="right" className="navbar-header z-depth-0">
            <NavItem href="" onClick={handleLoginClick} className="white-text login valign-wrapper modal-trigger">
                Login
            </NavItem>
            <NavItem href="" onClick={handleSignUpClick} className="white-text signup valign-wrapper modal-trigger">
                Signup
            </NavItem>
            <NavItem href="/categories" className="white-text fridge valign-wrapper">
                Fridge
            </NavItem>
        </Navbar>
    );
}

export default NavBar;