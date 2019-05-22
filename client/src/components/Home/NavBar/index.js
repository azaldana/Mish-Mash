import React from "react";
import "./style.css";
import { Navbar, NavItem, Modal, Button, TextInput } from 'react-materialize';
import API from "../../../utils/API";

class NavBar extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSignup = () => {
        const { username, password } = this.state;
        API.signup({ username, password })
            .then(res => {
                alert("done!")
            });
    }

    render() {
        const { username, password } = this.state;
        return (
            <Navbar brand={<a />} alignLinks="right" className="navbar-header z-depth-0">
                <NavItem>
                    <Modal header="Existing Users Sign In" className="black-text login" trigger={<Button>Login</Button>}>
                        <TextInput icon="account_box" label="User Name" />
                        <TextInput icon="lock" label="Password" />
                        <Button className="login-button">Log In</Button>
                    </Modal>
                </NavItem>

                <NavItem>
                    <Modal header="Sign Up" className="black-text signup" trigger={<Button>Signup</Button>}>
                        <TextInput
                            name="username"
                            icon="account_box"
                            label="User Name"
                            value={username}
                            onChange={this.handleChange}
                        />

                        <TextInput
                            name="password"
                            icon="lock"
                            label="Password"
                            value={password}
                            onChange={this.handleChange}
                        />

                        <Button
                        onClick={this.handleSignup}
                        className="login-button">Signup</Button>

                    </Modal>
                </NavItem>
                <NavItem href="/categories" className="white-text fridge valign-wrapper">
                    Fridge
            </NavItem>
            </Navbar>
        );
    }
}

export default NavBar;