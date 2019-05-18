import React from "react";
import "./style.css";

const NavBarRecipe = props => {
    return (
        <div className="container main-recipe">
                <nav class="nav-wrapper transparent z-depth-0">
                    <a href="/"><img class="nav-logo" src="./images/mish-mash-logo.png" width="80"></img></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">

                        <li><a href="/" class="white-text navtext valign-wrapper modal-trigger">Home</a></li>
                        <li><a href="/allchefs" class="white-text navtext valign-wrapper modal-trigger">Top Chefs</a></li>
                        <li><a href="/recipes" class="white-text navtext valign-wrapper modal-trigger">Fridge</a></li>
                        <li><a href="/blogs" class="white-text navtext valign-wrapper modal-trigger">Blogs</a></li>
                        <li><a href="#signup" class="white-text navtext valign-wrapper modal-trigger">Sign Out</a></li>
                        <li><a href="#" class="white-text valign-wrapper"></a></li>
                    </ul>

                    <ul class="sidenav grey lighten-2" id="mobile-menu">
                        <li><a href="#login" class="blue-grey-text login text-darken-4 modal-trigger">Log In</a></li>
                        <li><a href="#signup" class="blue-grey-text signup text-darken-4 modal-trigger">Sign Up</a></li>
                        <li><a href="#" class="blue-grey-text text-darken-4">Recipes</a></li>
                    </ul>
                </nav>
        </div>
    );
}

export default NavBarRecipe;