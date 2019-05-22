import React, { Component } from "react";
import NavBarAllChefs from "../components/AllChefs/NavBar";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Home/Footer";

function AllChefs() {
  return (
    <Wrapper>
      <NavBarAllChefs />
      <Footer />
    </Wrapper>

  );
}
export default AllChefs;