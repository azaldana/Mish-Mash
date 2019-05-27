import React from "react";
import "./style.css";
import { Navbar, NavItem, Modal, Button, TextInput } from 'react-materialize';
import API from "../../../utils/API";
import { truncate } from "fs";


class NavBar extends React.Component {
    state = {
        username: "",
        password: "",
        error: null,
        isLoginModalOpen: false,
        isSignupModalOpen: false,
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
                alert("done!");
                this.setState({
                    isSignupModalOpen: false,
                    username: "",
                    password: ""
                })
            });
    }

    handleLogin = () => {
        const { username, password } = this.state;
        const { onLogin } = this.props;
        API.login({ username, password })
            .then(res => {
                alert("You are logged in!");
                this.setState({
                    isLoginModalOpen: false,
                    username: "",
                    password: ""
                })
                onLogin(res.data)
            })
            .catch(err => {
                this.setState({
                    error: "Username password not matching"
                })
            })
    }

    openLoginModal = () => {
        this.setState({
            isLoginModalOpen: true
        });
    }

    closeLoginModal = () => {
        this.setState({
            isLoginModalOpen: false
        })
    }

    openSignupModal = () => {
        this.setState({
            isSignupModalOpen: true
        });
    }

    closeSignupModal = () => {
        this.setState({
            isSignupModalOpen: false
        })
    }

    render() {
        const { username, password } = this.state;
        const { user } = this.props;
        console.log(user);
        return (
            <Navbar brand={<a />} alignLinks="right" className="navbar-header z-depth-0">
                <NavItem>
                    {user ? null : (
                        <Button onClick={this.openLoginModal}>Login</Button>
                    )}

                    {this.state.isLoginModalOpen ? (
                        <Modal header="Existing Users Sign In" className="black-text login" open={true}>
                            <br></br>
                            <TextInput
                                className="login-username"
                                name="username"
                                icon="account_box"
                                label="User Name"
                                value={username}
                                onChange={this.handleChange}
                            />

                            <TextInput
                                className="login-password"
                                name="password"
                                type="password"
                                icon="lock"
                                label="Password"
                                value={password}
                                onChange={this.handleChange}
                            />

                            {this.state.error ? (
                                <span className="alert">{this.state.error}</span>
                            ) : null}  <br></br>

                            <Button
                                onClick={this.handleLogin}
                                className="login-button">Log In</Button>
                        </Modal>
                    ) : null}

                </NavItem>

                <NavItem>
                {user ? 
                <NavItem className="white-text signout valign-wrapper">
                Signout
         </NavItem> : (
                    <Button onClick={this.openSignupModal}>Signup</Button>
                    )}

                    {this.state.isSignupModalOpen ? (
                        <Modal header="Sign Up" className="black-text signup" open={true}>
                            <TextInput
                                name="username"
                                icon="account_box"
                                label="User Name"
                                value={username}
                                onChange={this.handleChange}
                            />

                            <TextInput
                                name="password"
                                type="password"
                                icon="lock"
                                label="Password"
                                value={password}
                                onChange={this.handleChange}
                            />

                            <Button
                                onClick={this.handleSignup}
                                className="login-button">Signup</Button>

                        </Modal>
                    ) : null}

                </NavItem>
                <NavItem href="/categories" className="white-text fridge valign-wrapper">
                    Fridge
             </NavItem>
            </Navbar>
        );
    }
}

export default NavBar;