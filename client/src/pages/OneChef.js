import React, { Component } from "react";
import NavBarOneChef from "../components/OneChef/NavBar";
import ChefRecipe from "../components/OneChef/ChefRecipe";
import Wrapper from "../components/Wrapper";
import Footer from "../components/OneChef/Footer";

function OneChef(props) {
  return (
    <Wrapper>
      <NavBarOneChef/>
      <ChefRecipe {...props}/>
      <Footer/>


    </Wrapper>


  );
}
export default OneChef;