import React from "react";
import "./style.css";

const openStyle = {
    zIndex: 1003,
    display: "block",
    opacity: 1,
    top: "10%",
    transform: "scaleX(1) scaleY(1)"
}

const Signup = props => {
    const { handleSignUpClose } = props;
    const { open } = props;
    const style = open ? openStyle : {}
      return (
        <div class="modal modal2 open" id="signup" style={style}>
            <div class="modal-content">
                <h2>Sign Up</h2>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="user_name_signup" type="text" class="validate" />
                                <label for="user_name">User Name</label>
                            </div>

                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">lock</i>
                                <input id="password_signup" type="password" class="validate" />
                                <label for="password_confirm">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">lock</i>
                                <input id="password_confirm" type="password" class="validate" />
                                <label for="password">Retype Password</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="left-align" id="modal-footer">
                <a href="#" id="signup_submit" class="modal-close btn amber accent-4">Sign Up</a>
                <a href="#" id="signup_close" onClick={handleSignUpClose} class="modal-close btn amber accent-4">Close</a>
            </div>
        </div>
    );
}

export default Signup;