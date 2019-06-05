import React from "react";

const RecipeSection = props => {
  return (
    <div class="recipe-page-content">
      <div class="recipes-page">
        <h2>Recipes</h2>
        <img
          src="./images/mish-mash-icon-yellow-new.png"
          width="50"
          alt="Icon"
          id="recipeIcon"
        />
        {props.children}
      </div>
    </div>
  );
};

export default RecipeSection;
