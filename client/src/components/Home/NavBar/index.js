import React from "react";
import "./style.css";
import { Navbar, NavItem, Modal, Button, TextInput } from 'react-materialize';

const NavBar = props => {
    const { handleSignUpClick } = props;
    const { handleLoginClick } = props;
    return (
        <Navbar brand={<a />} alignLinks="right" className="navbar-header z-depth-0">
            <NavItem>
                <Modal header="Existing Users Sign In" className="black-text login" trigger={<Button>Login</Button>}>
                    <TextInput icon="account-circle" label="User Name" />
                    <TextInput icon="lock" label="Password" />
                    <Button className="login-button">Log In</Button>
                </Modal>
            </NavItem>

            <NavItem>
                <Modal header="Sign Up" className="black-text signup" trigger={<Button>Signup</Button>}>
                    <TextInput icon="account-circle" label="User Name" />
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