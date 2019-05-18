import React, { Component } from "react";
import NavBarRecipe from "../components/CategoriesPage/NavBar";
import SelectedRecipe from "../components/Recipes/SelectedRecipe";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Home/Footer";

function Recipes() {
  return (
    <Wrapper>
      <NavBarRecipe />
      <SelectedRecipe/>
      <Footer/>

    </Wrapper>


  );
}
export default Recipes;