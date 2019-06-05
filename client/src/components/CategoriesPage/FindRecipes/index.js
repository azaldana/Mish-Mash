import React from "react";
import "./style.css";

const FindRecipes = props => {
  return (
    <div class="col s12 m7 l4">
      <div class="card recipeCard">
        <div class="card-image">
          <img src={props.image} alt="Recipe" />
        </div>
        <div class="card-content">
          <span class="card-title allchef-title">{props.title}</span>
        </div>
        <div class="card-action">
          <a href={`/recipes/${props.id}`}>View Recipe</a>
        </div>
      </div>
    </div>
  );
};

export default FindRecipes;
