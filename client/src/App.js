import React from "react";
// import CardChoices from "./components/CardChoices";
import Wrapper from "./components/Wrapper";
// import friends from "./choices.json";
import NavBar from "./components/NavBar";
// import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <Wrapper>
        <NavBar/>
        <About/>
      </Wrapper>
  );
}

export default App;