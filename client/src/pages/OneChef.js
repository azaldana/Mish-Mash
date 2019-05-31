import React, { Component } from "react";
import NavBarOneChef from "../components/OneChef/NavBar";
import ChefRecipe from "../components/OneChef/ChefRecipe";
import Wrapper from "../components/Wrapper";
import recipes from "../recipes.json";
import Footer from "../components/Home/Footer";

class OneChef extends Component {
  state = {
    recipes
  }

  componentDidMount() {
        console.log("componentDidMount");

    }

render(){
  return (
    <Wrapper>
      <NavBarOneChef/>
      <ChefRecipe 
      {...this.props}/>
      <Footer/>
    </Wrapper>
    );
  }
}

export default OneChef;