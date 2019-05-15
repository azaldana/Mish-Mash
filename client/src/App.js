import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllChefs from "./pages/AllChefs";
import Blogs from "./pages/Blogs";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import OneChef  from "./pages/OneChef";
import Recipes from "./pages/Recipes";


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

function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/allchefs" component={AllChefs} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/onechef" component={OneChef} />
            <Route exact path="/recipes" component={Recipes} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
    </Router>
  );
}

export default App;

