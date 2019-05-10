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
            </div>
        
    );
}

export default Chefs;