import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import HeaderChef from "./components/HeaderChef";
import recipes from "./recipes.json";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Chefs from "./components/Chefs";
import "./App.css";

class App extends Component {
  state = {
    recipes
  };

render() {
  return (
    <Wrapper>
        <NavBar/>
        <About/>
        <HeaderChef>
          <div className="container cards">
            <div className="row">
          {this.state.recipes.map(recipe => (
            <Chefs 
            id = {recipe.id}
            image = {recipe.image}
            /> ))}
            </div>
            </div>
          </HeaderChef>
      </Wrapper>
  );
}
}

export default App;