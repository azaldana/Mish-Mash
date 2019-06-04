import React, { Component } from "react";
import NavBarRecipe from "../components/CategoriesPage/NavBar";
import SelectedRecipe from "../components/Recipes/SelectedRecipe";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Home/Footer";
import API from "../utils/API";

class Recipes extends Component {
  state = {
    chosenRecipe: []
  };

  componentDidMount = id => {
    console.log("componentDidMount");
    console.log(this.props.match.params);

    API.getRecipes(id)
      .then(res =>
        this.setState({
          chosenRecipe: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Wrapper>
        <NavBarRecipe />
        {this.state.chosenRecipe.map(chosen => (
          <SelectedRecipe
            chosenRecipe={this.state.chosenRecipe}
            title={chosen.title}
            image={chosen.image}
            ingredients={chosen.ingredients}
            instructions={chosen.instructions}
            servings={chosen.servings}
            preparationMinutes={chosen.preparationMinutes}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}
export default Recipes;
