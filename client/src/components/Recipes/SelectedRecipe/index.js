import React from "react";
import MainRating from "../../OneChef/Ratings";
import "./style.css";

const SelectedRecipe = props => {
  return (
    <div className="container">
      <div className="row selected-recipe-row">
        <div className="col l8 offset-">
          <h1 className="headline-ingred">{props.title}</h1>
          <p className="totalTime-ingred">
            Prep Time: {props.readyInMinutes} minutes
          </p>
          <p className="servings-ingred">Serving Size: {props.servings}</p>
          <img className="image-ingred" src={props.image} />
          <br />
          <br />
          <p className="main-rating">
            Rate The Chef Below <MainRating />
          </p>
        </div>

        <div className="col l3">
          <p className="title-ingred">Ingredients</p>

          {console.log("ingredients", props.extendedIngredients)}
          <form className="form-ingred" action="#">
            {props.extendedIngredients.map(item => {
              return (
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>{item.originalString}</span>
                  </label>
                </p>
              );
            })}
          </form>
          <p className="instructions-ingred">
            <p className="title-insruc">Instructions</p>
            <br />
            {console.log("instructions", props.instructions)}
            {props.instructions
              ? props.instructions.split(".").map(item => {
                  console.log("item", item);
                  return <p>{item}</p>;
                })
              : ""}
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default SelectedRecipe;
