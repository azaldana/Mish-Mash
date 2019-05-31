import React from "react";
import MainRating from "../Ratings";
import "./style.css";

const OneChefRecipe = ({ recipe }) => {
    console.log("This is a console", recipe);
    const ingredients = recipe && typeof recipe.ingredients === 'string'
      ? recipe.ingredients.split(',')
      : recipe && recipe.ingredients;
    
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
                </div>

                <div className="col l3">
                    <p className="title-ingred">Ingredients</p>
                    <form className="form-ingred" action="#">
                        {ingredients.map(
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
