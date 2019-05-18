import React from "react";
import "./style.css";

const FindRecipes = props => {
    return (

<div class="recipe-page-content">
  <div class="recipes-page">
    <h2>Recipes</h2>
    <img src="./images/mish-mash-icon-yellow-new.png" width="50" alt="Icon" id="recipeIcon"/>
    <br></br>


    <div class="row">
    <div class="col s12 m7 l4">
      <div class="card">
        <div class="card-image">
          <img src="./images/8.jpg"/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="/recipes">This is a link</a>
        </div>
      </div>
    </div>
    <div class="col s12 m7 l4">
      <div class="card">
        <div class="card-image">
          <img src="./images/8.jpg"/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="/recipes">This is a link</a>
        </div>
      </div>
    </div>
    <div class="col s12 m7 l4">
      <div class="card">
        <div class="card-image">
          <img src="./images/8.jpg"/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="/recipes">This is a link</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>

);
}

export default FindRecipes;