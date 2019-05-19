import React from "react";
import "./style.css";

const Hero = props => {
    return (
        <div className="center-align  header">
        {props.children}
            <img src="./images/mish-mash-white.png" width="500" alt="Logo" className="top-logo" />
            
        </div>
    );
}

export default Hero;