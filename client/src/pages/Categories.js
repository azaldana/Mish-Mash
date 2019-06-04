import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import NavBarIngredients from "../components/CategoriesPage/NavBar";
import Ingredients from "../components/CategoriesPage/Ingredients";
import FindRecipes from "../components/CategoriesPage/FindRecipes";
import Footer from "../components/Home/Footer";
import RecipeSection from "../components/CategoriesPage/RecipeSection";

class Recipe extends Component {
  state = {
    recipes: []
  };

  handleSend = id => () => {
    this.props.handleSend(id);
  };

  getRecipe = id => {
    console.log(id);
    fetch("/api/categories/x", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
      .then(data => data.json())
      .then(d => console.log(d));
  }

  render() {
    console.log(this.state.recipes);

    return (
      <Wrapper>
        <NavBarIngredients />
        <Ingredients setRecipes={recipes => this.setState({ recipes })} />
        <RecipeSection>
          <div class="row">
            {this.state.recipes.map(recipe => (
              <FindRecipes
                title={recipe.title}
                image={recipe.image}
                id={recipe.id}
                handleSend={this.handleSend}
                getRecipe={this.getRecipe}
              />
            ))}
          </div>
        </RecipeSection>
        <Footer />
      </Wrapper>
    );
  }
}

export default Recipe;
