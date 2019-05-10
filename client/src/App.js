import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import HeaderChef from "./components/HeaderChef";
import recipes from "./recipes.json";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Chefs from "./components/Chefs";
import DualBtn from "./components/DualBtn";
import Video from "./components/Video";
import HeaderBlogs from "./components/HeaderBlogs";
import Blogs from "./components/Blogs";
import Categories from "./components/Categories";
import SubmitForm from "./components/SubmitForm";
import Footer from "./components/Footer";
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
          <DualBtn/>
          <Video/>
          <HeaderBlogs>
            <div className="container blogs">
            <div className="row">
            <Blogs/>
            </div>
            </div>
          </HeaderBlogs>
          <Categories/>
          
            <div className="row">
            <form className="col s12">
            <SubmitForm/>
            </form>
            </div>
          <Footer/>
      </Wrapper>
  );
}
}

export default App;