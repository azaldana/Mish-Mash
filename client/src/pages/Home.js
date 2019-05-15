import React, {Component} from "react";
import Wrapper from "../components/Wrapper";
import HeaderChef from "../components/Home/HeaderChef";
import recipes from "../recipes.json";
import NavBar from "../components/Home/NavBar";
import About from "../components/Home/About";
import Chefs from "../components/Home/Chefs";
import DualBtn from "../components/Home/DualBtn";
import Video from "../components/Home/Video";
import HeaderBlogs from "../components/Home/HeaderBlogs";
import Blogs from "../components/Home/Blogs";
import Categories from "../components/Home/Categories";
import SubmitForm from "../components/Home/SubmitForm";
import Footer from "../components/Home/Footer";
// import Slider from '../components/Slider'

class Home extends Component {
  state = {
    recipes
  };

render() {
  return (
    <Wrapper>
        <NavBar/>
        <About/>
        <HeaderChef>
            <Chefs/>
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

export default Home;