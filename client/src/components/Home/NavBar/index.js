import React from "react";
import "./style.css";

const NavBar = props => {
    const { handleSignUpClick } = props; 
    const { handleLoginClick } = props;
    return (
        <div className="container-chefs">
            <header>
                <nav class="nav-wrapper transparent z-depth-0">
                    <a href="#" class="sidenav-trigger" data-target="mobile-menu">
                        <i class="material-icons white-text">menu</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">

                        <li><a href="#login" onClick={handleLoginClick} class="white-text login valign-wrapper modal-trigger">Log In</a></li>
                        <li><a href="#" onClick={handleSignUpClick} class="white-text signup valign-wrapper modal-trigger">Sign Up</a></li>
                        <li><a href="/categories" class="white-text recipes valign-wrapper modal-trigger">Recipes</a></li>
                        <li><a href="#" class="white-text valign-wrapper"></a></li>
                    </ul>

                    <ul class="sidenav grey lighten-2" id="mobile-menu">
                        <li><a href="#login" class="blue-grey-text login text-darken-4 modal-trigger">Log In</a></li>
                        <li><a href="#signup" class="blue-grey-text signup text-darken-4 modal-trigger">Sign Up</a></li>
                        <li><a href="#" class="blue-grey-text text-darken-4">Recipes</a></li>
                    </ul>
                </nav>

                <div class="center-align">
                    <img src="./images/mish-mash-white.png" width="500" alt="Logo" id="top-logo" />
                </div>
            </header>
        </div>
    );
}

export default NavBar;