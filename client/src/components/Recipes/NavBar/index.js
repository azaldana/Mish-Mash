import React from "react";
import "./style.css";
import { Navbar, NavItem } from 'react-materialize';

const NavBarRecipe = props => {
    const Img = <a href="/"><img src="./images/mish-mash-logo.png" width="80" className="nav-logo"/></a>
    return (
    <Navbar brand={Img} alignLinks="right" className="transparent z-depth-0">
            <NavItem href="/" className="black-text navtext valign-wrapper modal-trigger">
                Home
            </NavItem>
            <NavItem href="/allchefs" className="black-text navtext valign-wrapper modal-trigger">
                Top Chefs
            </NavItem>
            <NavItem href="/categories" className="black-text navtext valign-wrapper">
                Fridge
            </NavItem>
            <NavItem href="/blogs" className="black-text navtext valign-wrapper">
                Blogs
            </NavItem>
            <NavItem href="" className="black-text navtext signout valign-wrapper">
                Signout
            </NavItem>
        </Navbar>
    );
}

export default NavBarRecipe;