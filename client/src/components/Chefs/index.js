import React from "react";
import "./style.css";

const Chefs = props => {
    return (
            <div className="col l4 background">

                <div className="card">
                    <div className="card-image">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="card-content">
                        <span className="card-title">{props.title}</span>

                    </div>
                </div>

                <button class="btn waves-effect col 12 waves-light z-depth-0" id="seeMore" type="submit" name="action">See More Results
<i class="material-icons right">send</i>
                </button>
            </div>
        
    );
}

export default Chefs;