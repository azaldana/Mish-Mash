import React, { Component } from "react";
import NavBarRecipe from "../components/CategoriesPage/NavBar";
import SelectedRecipe from "../components/Recipes/SelectedRecipe";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Home/Footer";

class Recipes extends Component {
  state = {
    selectedRecipe: null
  };

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.props.match.params);
    const id = Number(this.props.match.params.id);
    const selectedRecipe = this.state.recipes.find(r => r.id === id);
    this.setState({ selectedRecipe });
  }

  render() {
    return (
      <Wrapper>
        <NavBarRecipe />
        <SelectedRecipe selectedRecipe={this.state.selectedRecipe} />
        <Footer />
      </Wrapper>
    );
  }
}
export default Recipes;
