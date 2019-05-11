import React from "react";
import "./style.css";

const DualBtn = props => {
    return (

        <div className="dual-btn">
        <div class="container-button">
        
        <button class="btn waves-effect col 12 waves-light z-depth-0" id="review" type="submit" name="action">Review
        <i class="material-icons left">edit</i>
        </button>
        <button class="btn waves-effect col 12 waves-light z-depth-0" id="submit" type="submit" name="action">Submit Recipes
            <i class="material-icons right">send</i>
        </button>
        </div>
        
        </div>

    );
};

export default DualBtn;