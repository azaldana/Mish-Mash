import React from "react";
import "./style.css";

const SelectedRecipe = props => {
    return (
        <div className="container">
            <div className="row selected-recipe-row">
                <div className="col l8 offset-">
                    <h1 className="headline-ingred">EFFORTLESS BLACK BEAN CHILI</h1>
                    <img className="image-ingred" src="/images/8.jpg" />
                    <br></br>
                    <p className="submission-insruc">
                        Follow The Chef: @kaylapega <i class="fab fa-instagram"></i>
                    </p>                   
                </div>

                <div className="col l3">
                    <p className="title-ingred">Ingredients</p>
                    <form className="form-ingred" action="#">
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>1 pound ground turkey</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span>1 small onion, chopped</span>
                            </label>
                        </p>
                    </form>
                    <p className="instructions-ingred">
                    <p className="title-insruc">Instructions</p><br></br>
                        1. In a large skillet, cook and crumble turkey with onion over medium-high heat until no longer pink, 5-7 minutes. Transfer to a 4-qt. slow cooker.<br></br><br></br>
                        2. Stir in all remaining ingredients except toppings. Cook, covered, on low until flavors are blended, 6-8 hours. Top as desired.
                    </p>
                    <br></br>
                    <a class="waves-effect waves-light btn one-chef-review">
                        <i class="material-icons right">chevron_right</i>
                    Leave a Review</a>                    
                </div>

            </div>
        </div>
    );
}

export default SelectedRecipe;