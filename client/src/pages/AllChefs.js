import React, { Component } from "react";
import NavBarAllChefs from "../components/AllChefs/NavBar";
import ChefCards from "../components/AllChefs/ChefCards";
import Wrapper from "../components/Wrapper";
import recipes from "../recipes.json";

class AllChefs extends Component {
  state = {
    recipes
  }
  render() {

    return (
      <Wrapper>
        <NavBarAllChefs />
        <div class="row">
            {this.state.recipes.map(recipe => (
              <ChefCards
                title={recipe.title}
                image={recipe.image}
              />
            ))}
        </div>
      </Wrapper>
    );
  }
}

export default AllChefs;