import React, { Component } from "react";
import NavBarAllChefs from "../components/AllChefs/NavBar";
import ChefCards from "../components/AllChefs/ChefCards";
import Wrapper from "../components/Wrapper";

function AllChefs() {
  return (
    <Wrapper>
      <NavBarAllChefs />
      <ChefCards />
    </Wrapper>
  );
}
export default AllChefs;