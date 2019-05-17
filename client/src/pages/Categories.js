import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import NavBarRecipe from "../components/CategoriesPage/NavBar";
import Ingredients from "../components/CategoriesPage/SearchRecipe";
import FindRecipes from "../components/CategoriesPage/FindRecipe";
import Footer from "../components/CategoriesPage/Footer";

class Recipe extends Component {


    render() {
        return (
            <Wrapper>
                <NavBarRecipe/>
                <Ingredients/>
                <FindRecipes/>
                <Footer/>
            </Wrapper>

        );
    }
}

export default Recipe;