import React from "react";
import "./style.css";

const Chefs = props => {
    return (
        <div className="container chef-container">
            <div className="row recipe">
                <div className="col s4">
                    <img className="chef-image" src={props.image} />
                </div>
                <div className="col s8 right-side">
                    <div className="text">
                        <p className="featured">Featured</p>
                        <h1>{props.title}</h1>
                        <br></br>
                        <a href="/onechef" class="waves-effect waves-light btn view-01"><i class="material-icons right">send</i>View Recipe</a>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Chefs;