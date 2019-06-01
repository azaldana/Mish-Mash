import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import NavBarIngredients from "../components/CategoriesPage/NavBar";
import Ingredients from "../components/CategoriesPage/Ingredients";
import FindRecipes from "../components/CategoriesPage/FindRecipe";
import Footer from "../components/Home/Footer";

class Recipe extends Component {

    state = {
        receipes: []
    }

    render() {
        return (
            <Wrapper>
                <NavBarIngredients/>
                <Ingredients setReceipes={(receipes) => this.setState({receipes})}/>
                <FindRecipes receipes={this.state.receipes}/>
                <Footer/>
            </Wrapper>

        );
    }
}

export default Recipe;