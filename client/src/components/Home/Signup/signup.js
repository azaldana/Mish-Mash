import React from "react";
import "./style.css";

const Signup = props => {
    return (
        <div class="modal modal2" id="signup">
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
            </div>
        </div>
    );
}

export default Signup;