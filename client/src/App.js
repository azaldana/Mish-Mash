import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllChefs from "./pages/AllChefs";
import Blogs from "./pages/Blogs";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import OneChef from "./pages/OneChef";
import Recipes from "./pages/Recipes";
import { UserProvider } from './utils/userContext';
import allRecipes from './recipes.json';


function Index() {
  return (
    <Home></Home>
  )
}

function Featured() {
  return (
    <AllChefs></AllChefs>
  )
}

function Articles() {
  return (
    <Blogs></Blogs>
  )
}

function Ingredients() {
  return (
    <Categories></Categories>
  )
}

function Meal() {
  return (
    <Recipes></Recipes>
  )
}

class App extends React.Component {

  state = {
    recipieId: -1,
    currentUser: null
  }

  handleSend = (id) => {
    this.setState({
      recipieId: id
    })
  }

  onLoggedIn = (user) => {
    this.setState({
      currentUser: user
    })
  }

  render() {
    const { recipieId } = this.state;
    const currentRecipe = allRecipes.find(r => r.id == recipieId);

    console.log(currentRecipe);

    return (
      <UserProvider>
        <Router>
          <div>
            <Switch>
              <Route exact path="/"
                render={(props) => <Home {...props} handleSend={this.handleSend} onLoggedIn={this.onLoggedIn} />} />

              <Route exact path="/allchefs" component={AllChefs} />
              <Route exact path="/blogs" component={Blogs} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/onechef" render={(props) => <OneChef {...props} recipe={currentRecipe} />} />
              <Route exact path="/recipes" component={Recipes} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </div>
        </Router>
        </UserProvider>
    );
  }
}

export default App;