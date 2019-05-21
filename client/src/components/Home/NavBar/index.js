import React from "react";
import "./style.css";
import { Navbar, NavItem, Modal, Button, TextInput } from 'react-materialize';

const NavBar = props => {
    const { handleSignUpClick } = props;
    const { handleLoginClick } = props;
    return (
        <Navbar brand={<a />} alignLinks="right" className="navbar-header z-depth-0">
            <NavItem>
                <Modal header="Modal Header" className="black-text login" trigger={<Button>Login</Button>}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</p>
                </Modal>
            </NavItem>

            <NavItem>
                <Modal header="Sign Up" className="black-text signup" trigger={<Button>Signup</Button>}>
                    <TextInput icon="accoun-circle" label="User Name" />
                    <TextInput icon="lock" label="Password" />

                </Modal>
            </NavItem>
            <NavItem href="/categories" className="white-text fridge valign-wrapper">
                Fridge
            </NavItem>
        </Navbar>
    );
}

export default NavBar;