import React from "react";
import "./style.css";

const Login = props => {
    return (
        <div class="modal modal1" id="login">
        <div class="modal-content">
          <h2>Existing Users Sign In</h2>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="user_name_login" type="text" class="validate"/>
                  <label for="user_name">User Name</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">lock</i>
                  <input id="password_login" type="password" class="validate"/>
                  <label for="password">Password</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      
        <div class="left-align" id="modal-footer">
          <a href="#" id="login_submit" class="modal-close btn amber accent-4">Log In</a>
        </div>
      </div>
    );
}

export default Login;