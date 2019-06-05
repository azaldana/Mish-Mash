import React, { Component } from "react";
import NavBarAllChefs from "../components/AllChefs/NavBar";
import ChefCards from "../components/AllChefs/ChefCards";
import Wrapper from "../components/Wrapper";
// import {recipes} from "../recipes.js";
import ChefHeader from "../components/AllChefs/ChefHeader";
import Footer from "../components/Home/Footer";
import UserContext from "../utils/userContext";


class AllChefs extends Component {
  // state = {
  //   recipes,
  //   recipe
  // };

  handleSend = id => () => {
    this.props.handleSend(id);
  };

  render() {
    return (
      <UserContext.Consumer>
        {context => (
      <Wrapper>
        <NavBarAllChefs />
        <ChefHeader />
        <div class="row">
          {context.recipes.map(recipe => (
            <ChefCards
              title={recipe.title}
              image={recipe.image}
              social={recipe.social}
              id={recipe.id}
            />
          ))}
        </div>
        <Footer />
      </Wrapper>
        )}
     </UserContext.Consumer>
    );
  }
}

export default AllChefs;
