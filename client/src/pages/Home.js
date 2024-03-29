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
import Hero from "../components/Home/Hero";
import UserContext from "../utils/userContext";

class Home extends Component {
  static contextType = UserContext;
  state = {
    recipes
  };

  handleSend = id => () => {
    this.props.handleSend(id);
  };

  handleLogin = user => {
    const { onLogin } = this.context;
    onLogin(user);
  };

  handleSignup = user => {
    const { onSignup } = this.context;
    onSignup(user);
  };

  handleSubmitForm = submission => {
    const { submitForm } = this.props;
    submitForm(submission);
  };

  render() {
    const { user } = this.context;
    const { submission } = this.props;
    console.log(user);

    return (
      <Wrapper>
        <Hero>
          <NavBar
            onLogin={this.handleLogin}
            user={user}
            onSignup={this.handleSignup}
            user={user}
          />
        </Hero>
        <About />
        <HeaderChef>
          <Chefs
            recipe={recipes[7]}
            title={recipes[7].title}
            image={recipes[7].image}
            id={recipes[7].id}
          />
          <Chefs
            recipe={recipes[12]}
            handleSend={this.handleSend(recipes[12].id)}
            title={recipes[12].title}
            image={recipes[12].image}
            id={recipes[12].id}
          />
          <Chefs
            recipe={recipes[20]}
            handleSend={this.handleSend(recipes[20].id)}
            title={recipes[20].title}
            image={recipes[20].image}
            id={recipes[20].id}
          />
          <a href="/allchefs" class="waves-effect waves-light btn view">
            View All Chefs
          </a>
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
            <SubmitForm
              onLogin={this.handleLogin}
              user={user}
              submitForm={this.handleSubmitForm}
              submission={submission}
            />
          </form>
        </div>
        <FooterAll />
      </Wrapper>
    );
  }
}

export default Home;
