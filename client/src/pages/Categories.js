import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import NavBarIngredients from "../components/CategoriesPage/NavBar";
import Ingredients from "../components/CategoriesPage/SearchRecipe";
import FindRecipes from "../components/CategoriesPage/FindRecipe";
import Footer from "../components/Home/Footer";

class Recipe extends Component {


    render() {
        return (
            <Wrapper>
                <NavBarIngredients/>
                <Ingredients/>
                <FindRecipes/>
                <Footer/>
            </Wrapper>

        );
    }
}

export default Recipe;