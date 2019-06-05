import React from "react";
import "./style.css";

const Categories = () => {
  return (
    <div className="categories">
      <div class="container-recipes">
        <h1>Find Recipes Based on your list of ingredients</h1>

        <a href="/categories">
          <button
            class="btn waves-effect col 12 waves-light z-depth-0"
            id="submit"
            type="submit"
            name="action"
          >
            Search Recipes
            <i class="material-icons right">send</i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Categories;
