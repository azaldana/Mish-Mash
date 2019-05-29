import React from "react";
import MainRating from "../Ratings";
import "./style.css";

const OneChefRecipe = ({ recipe }) => {

    if (!recipe) {
        return <div />;
    }
    return (

        <div className="container">
            <div className="row one-chef-row">
                <div className="col l8 offset-">
                    <h1 className="headline-ingred">{recipe.title}</h1>
                    <p className="totalTime-ingred">{recipe.totalTime}</p>
                    <p className="servings-ingred">Serving Size: {recipe.servings}</p>
                    <img className="image-ingred" src={recipe.image} width="420" />
                    <br></br>
                    <p className="submission-insruc">
                        Follow The Chef: {recipe.social} <i class="fab fa-instagram"></i>
                    </p>
                    <br></br>
                    <p className="main-rating">Rate The Chef Below <MainRating/></p>
                    {/* <div class="rating">
                        <label>
                            <input type="radio" name="rating" value="5" title="5 stars" /> 5
                        </label>
                        <label>
                            <input type="radio" name="rating" value="4" title="4 stars" /> 4
                        </label>
                        <label>
                            <input type="radio" name="rating" value="3" title="3 stars" /> 3
                        </label>
                        <label>
                            <input type="radio" name="rating" value="2" title="2 stars" /> 2
                        </label>
                        <label>
                            <input type="radio" name="rating" value="1" title="1 star" /> 1
                        </label>
                    </div> */}

                </div>

                <div className="col l3">
                    <p className="title-ingred">Ingredients</p>
                    <form className="form-ingred" action="#">
                        {recipe.ingredients.split(",").map(
                            (item) => {
                                return <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>{item}</span>
                                    </label>
                                </p>
                            }
                        )}

                    </form>
                    <p className="instructions-ingred">
                        <p className="title-insruc">Instructions</p><br></br>
                        {recipe.instructions.split("\n").map(
                            (item) => {
                                return <p>{item}</p>
                            }
                        )}
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

export default OneChefRecipe;
