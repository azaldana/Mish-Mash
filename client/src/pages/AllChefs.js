import React, { Component } from "react";
import NavBarAllChefs from "../components/AllChefs/NavBar";
import ChefCards from "../components/AllChefs/ChefCards";
import Wrapper from "../components/Wrapper";
import recipes from "../recipes.json";
import ChefHeader from "../components/AllChefs/ChefHeader"
import Footer from "../components/Home/Footer"

class AllChefs extends Component {
  state = {
    recipes
  }

  handleSend = (id) => () => {
    this.props.handleSend(id);
  }

  render() {

    return (
      <Wrapper>
        <NavBarAllChefs />
        <ChefHeader/>
        <div class="row">
            {this.state.recipes.map(recipe => (
              <ChefCards
                title={recipe.title}
                image={recipe.image}
                social={recipe.social}
                handleSend={this.handleSend(recipes.id)}
              />
            ))}
        </div>
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default AllChefs;