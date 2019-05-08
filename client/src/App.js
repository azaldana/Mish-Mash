import React from "react";
// import CardChoices from "./components/CardChoices";
import Wrapper from "./components/Wrapper";
// import friends from "./choices.json";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Chefs from "./components/Chefs";
import "./App.css";

function App() {
  return (
    <Wrapper>
        <NavBar/>
        <About/>
        <Chefs/>
      </Wrapper>
  );
}

export default App;