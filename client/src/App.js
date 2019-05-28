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

const API_KEY = "a98f4c1c702634fb3ad1e056fde192f1";

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
    currentUser: null,
    recipes: []
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

  // componentDidMount() {
  //   fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%2Cflour%2Csugar")
  //   .then(results => results.json())
  //   .then(data => {
  //     const recipes = data.reults;
  //     this.setState({ recipes: recipes})
  //     console.log(recipes);
  //   })
  //   .catch(err => console.log(err));
  // }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
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