import React from "react";
import { Link } from "react-dom";
import "./style.css";

const FindRecipes = props => {
  console.log(props.image);
  return (
    <div class="col s12 m7 l4">
      <div class="card recipeCard">
        <div class="card-image">
          <img src={props.image} />
        </div>
        <div class="card-content">
          <span class="card-title allchef-title">{props.title}</span>
        </div>
        <div class="card-action">
          <a href="/onechef">View Recipe</a>
          {/* <Link to={`/onechef/${props.id}`}>View Recipe</Link> */}
        </div>
      </div>
    </div>
  );
};

export default FindRecipes;
