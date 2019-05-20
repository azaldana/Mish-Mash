import React, { Component } from "react";
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
import FooterAll from "../components/Home/Footer";
import Signup from "../components/Home/Signup";
import Login from "../components/Home/Login";
import Hero from "../components/Home/Hero";
// import Slider from '../components/Slider'

class Home extends Component {
  state = {
    recipes,
    isSignupOpen: false,
    isLoginOpen: false
  };

  handleSignUpClick = () => {
    this.setState({
      isSignupOpen: true
    })
  }

  handleLoginClick = () => {
    this.setState({
      isLoginOpen: true
    })
  }

  handleSignUpClose = () => {
    this.setState({
      isSignupOpen: false
    })
  }

  handleLoginClose = () => {
    this.setState({
      isLoginOpen: false
    })
  }
  handleSend = (id) => () => {
    this.props.handleSend(id);
  }


  render() {
    const { isSignupOpen } = this.state;
    const { isLoginOpen } = this.state;

    return (
      <Wrapper>
        <Hero>
          <NavBar
            handleSignUpClick={this.handleSignUpClick}
            handleLoginClick={this.handleLoginClick}
          />
        </Hero>
        <Signup
          open={isSignupOpen}
          handleSignUpClose={this.handleSignUpClose}
        />
        <Login
          open={isLoginOpen}
          handleLoginClose={this.handleLoginClose}
        />
        <About />
        <HeaderChef>
          <Chefs recipe={recipes[7]}
            handleSend={this.handleSend(recipes[7].id)}
            title={recipes[7].title}
            image={recipes[7].image}
          />
          <Chefs recipe={recipes[12]}
            handleSend={this.handleSend(recipes[12].id)}

            title={recipes[12].title}
            image={recipes[12].image}
          />
          <Chefs recipe={recipes[20]}
            handleSend={this.handleSend(recipes[20].id)}
            title={recipes[20].title}
            image={recipes[20].image}
          />
          <a href="/allchefs" class="waves-effect waves-light btn view">View all Chefs</a>
        </HeaderChef>
        <DualBtn />
        <Video />
        <HeaderBlogs>
          <div className="container blogs">
            <div className="row">
              <Blogs />
            </div>
          </div>
        </HeaderBlogs>
        <Categories />

        <div className="row">
          <form className="col s12">
            <SubmitForm />
          </form>
        </div>
        <FooterAll />
      </Wrapper>
    );
  }
}

export default Home;