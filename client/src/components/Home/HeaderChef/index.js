import React from "react";
import "./style.css";

const HeaderChef = props => {
  return (
    <div className="container-chefs">
      <div className="recipe-content">
        <div className="recipes">
          <h2>Top Chefs</h2>
          <img
            src="./images/mish-mash-icon-yellow-new.png"
            width="50"
            alt="Icon"
            id="recipeIcon"
          />
          <br />
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default HeaderChef;
