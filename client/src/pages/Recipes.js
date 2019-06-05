import React, { Component } from "react";
import NavBarRecipe from "../components/CategoriesPage/NavBar";
import SelectedRecipe from "../components/Recipes/SelectedRecipe";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Home/Footer";
import API from "../utils/API";

class Recipes extends Component {
  state = {
    chosenRecipe: null
  };

  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;
    console.log(params);
    console.log(this.props.match.params);

    API.getRecipes(params.id)
      .then(res => {
        console.log(res.data);
        this.setState({
          chosenRecipe: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log("recipe.js", this.state);
    return (
      <Wrapper>
        <NavBarRecipe />
        {this.state.chosenRecipe ? (
          <SelectedRecipe {...this.state.chosenRecipe} />
        ) : null}
        <Footer />
      </Wrapper>
    );
  }
}
export default Recipes;
