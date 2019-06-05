import React from 'react';
import recipes from "../recipes.json"

const userString = sessionStorage.getItem('user');
const initialUser = userString ? JSON.parse(userString) : null;

const UserContext = React.createContext();

export class UserProvider extends React.Component {
  state = {
    currentUser: initialUser,
    recipes: recipes,
  }

  onLogin = (user) => {
    this.setState({
      currentUser: user
    });
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  onLogout = () => {
    this.setState({
      currentUser: null
    })
    sessionStorage.removeItem('user');
  }

  newRecipe = (recipe) => {
    const addedRecipes = [...this.state.recipes]
    addedRecipes.unshift(recipe)
    console.log("SAVED!: ", addedRecipes)

    this.setState({
      recipes: addedRecipes
    })

  }
  render() {
    return (
      <UserContext.Provider value={{
        user: this.state.currentUser,
        recipes: this.state.recipes,
        onLogin: this.onLogin,
        onLogout: this.onLogout,
        newRecipe: this.newRecipe
      }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContext;