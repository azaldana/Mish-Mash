import React from "react";
import "./style.css";
import { Navbar, NavItem, Modal, Button, TextInput } from "react-materialize";
import API from "../../../utils/API";

class NavBar extends React.Component {
  state = {
    username: "",
    password: "",
    error: null,
    isLoginModalOpen: false,
    isSignupModalOpen: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSignup = () => {
    const { username, password } = this.state;
    API.signup({ username, password }).then(res => {
      this.setState({
        isSignupModalOpen: false,
        username: "",
        password: ""
      });
    });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    const { onLogin } = this.props;
    API.login({ username, password })
      .then(res => {
        this.setState({
          isLoginModalOpen: false,
          username: "",
          password: ""
        });
        onLogin(res.data);
      })
      .catch(err => {
        this.setState({
          error: "Username password not matching"
        });
      });
  };

  signoutButtonClicked = () => {};

  openLoginModal = () => {
    this.setState({
      isLoginModalOpen: true
    });
  };

  closeLoginModal = () => {
    this.setState({
      isLoginModalOpen: false
    });
  };

  openSignupModal = () => {
    this.setState({
      isSignupModalOpen: true
    });
  };

  closeSignupModal = () => {
    this.setState({
      isSignupModalOpen: false
    });
  };

  render() {
    const { username, password } = this.state;
    const { user } = this.props;
    console.log(user);
    return (
      <Navbar
        brand={<a />}
        alignLinks="right"
        className="navbar-header z-depth-0"
      >
        <NavItem href="/categories" className="white-text valign-wrapper">
          Fridge
        </NavItem>
        <NavItem href="/blogs" className="white-text valign-wrapper">
          Blogs
        </NavItem>
        <NavItem>
          {user ? null : (
            <Button
              className="white-text valign-wrapper z-depth-0"
              onClick={this.openLoginModal}
            >
              Login
            </Button>
          )}

          {this.state.isLoginModalOpen ? (
            <Modal
              header="Existing Users Sign In"
              className="black-text login"
              open={true}
            >
              <br />
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
              ) : null}{" "}
              <br />
              <Button onClick={this.handleLogin} className="login-button">
                Log In
                <i class="material-icons right">chevron_right</i>
              </Button>
              <Button onClick={this.closeLoginModal} className="login-button">
                Close
                <i class="material-icons right">close</i>
              </Button>
            </Modal>
          ) : null}
        </NavItem>

        <NavItem>
          {user ? (
            <NavItem
              className="white-text signout valign-wrapper"
              onClick={this.signoutButtonClicked}
            >
              Signout
            </NavItem>
          ) : (
            <Button
              className="white-text valign-wrapper z-depth-0"
              onClick={this.openSignupModal}
            >
              Signup
            </Button>
          )}

          {this.state.isSignupModalOpen ? (
            <Modal header="Sign Up" className="black-text signup" open={true}>
              <TextInput
                className="signup-username"
                name="username"
                icon="account_box"
                label="User Name"
                value={username}
                onChange={this.handleChange}
              />

              <TextInput
                className="signup-password"
                name="password"
                type="password"
                icon="lock"
                label="Password"
                value={password}
                onChange={this.handleChange}
              />

              <Button onClick={this.handleSignup} className="signup-button">
                Signup
                <i class="material-icons right">chevron_right</i>
              </Button>

              <Button onClick={this.closeSignupModal} className="signup-button">
                Close
                <i class="material-icons right">close</i>
              </Button>
            </Modal>
          ) : null}
        </NavItem>
      </Navbar>
    );
  }
}

export default NavBar;
