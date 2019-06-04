import React from "react";
import "./style.css";

const SelectedRecipe = ({ selectedRecipe }) => {
  // componentDidMount() {
  //   console.log("componentDidMount");
  //   console.log(this.props.match.params);
  //   const id = Number(this.props.match.params.id);
  //   const chosenRecipe = this.state.recipes.find(r => r.id === id);
  //   this.setState({ chosenRecipe });
  // }
  const ingredients =
    selectedRecipe && typeof selectedRecipe.ingredients === "string"
      ? selectedRecipe.ingredients.split(",")
      : selectedRecipe && selectedRecipe.ingredients;

  if (!selectedRecipe) {
    return <div />;
  }
  return (
    <div className="container">
      <div className="row selected-recipe-row">
        <div className="col l8 offset-">
          <h1 className="headline-ingred">{selectedRecipe.title}</h1>
          <p className="totalTime-ingred">{selectedRecipe.totalTime}</p>
          <p className="servings-ingred">
            Serving Size: {selectedRecipe.servings}
          </p>
          <img className="image-ingred" src={selectedRecipe.image} />
          <br />
        </div>

        <div className="col l3">
          <p className="title-ingred">Ingredients</p>
          <form className="form-ingred" action="#">
            {ingredients.map(item => {
              return (
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                </p>
              );
            })}
          </form>
          <p className="instructions-ingred">
            <p className="title-insruc">Instructions</p>
            <br />
            {selectedRecipe.instructions.split("\n").map(item => {
              return <p>{item}</p>;
            })}
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default SelectedRecipe;
