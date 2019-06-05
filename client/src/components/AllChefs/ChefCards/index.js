import React from "react";
import "./style.css";

const ChefCards = props => {
  return (
    <div class="col s12 m7 l4">
      <div class="card chefcard">
        <div class="card-image">
          <img src={props.image} alt="Recipe" />
        </div>
        <div class="card-content">
          <span class="card-title allchef-title">{props.title}</span>
          <br />
          <p className="all-chef-instructions">Recipe by: {props.social}</p>
        </div>
        <div class="card-action">
          <a href={`/onechef/${props.id}`}>View Recipe</a>
        </div>
      </div>
    </div>
  );
};

export default ChefCards;
