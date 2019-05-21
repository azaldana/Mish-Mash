import React from "react";
import "./style.css";

const DualBtn = props => {
    return (

        <div className="dual-btn">
        <div class="container-button">
        <h1>Submit Your Own Recipe or Leave a Review!</h1>
        
        <a href="/allchefs"><button class="btn waves-effect col 12 waves-light z-depth-0" id="review" type="submit" name="action">Leave Review
        <i class="material-icons left">edit</i>
        </button></a>
        <a href="#submit-form"><button class="btn waves-effect col 12 waves-light z-depth-0" id="submit" type="submit" name="action">Submit Recipe
            <i class="material-icons right">send</i>
        </button></a>
        </div>
        
        </div>

    );
};

export default DualBtn;