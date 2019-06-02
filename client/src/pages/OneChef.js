import React, { Component } from "react";
import NavBarOneChef from "../components/OneChef/NavBar";
import ChefRecipe from "../components/OneChef/ChefRecipe";
import Wrapper from "../components/Wrapper";
import recipes from "../recipes.json";
import Footer from "../components/Home/Footer";

class OneChef extends Component {
  state = {
    recipes,
    recipe: null
  };

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.props.match.params);
    const id = Number(this.props.match.params.id);
    const recipe = this.state.recipes.find(r => r.id === id);
    this.setState({ recipe });
  }

  render() {
    return (
      <Wrapper>
        <NavBarOneChef />
        <ChefRecipe recipe={this.state.recipe} />
        <Footer />
      </Wrapper>
    );
  }
}

export default OneChef;
