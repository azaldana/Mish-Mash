import API from "../../../utils/API";
import "./style.css";
import React from "react";
var unirest = require('unirest');



function handleSearch() {
    alert("button-clicked");
    unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%2Cflour%2Csugar")
    .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "WPW7FyEBbTmshvFlCq04kYiUjJU8p1BiPTajsn0sk2QRRQeYTY")
    .end(function (result) {
    console.log(result.status, result.headers, result.body);
    });
}


const dairy = [
    "Egg",
    "Butter",
    "Milk",
    "Yogurt",
    "Sour Cream",
    "Custard",
    "Cottage Cheese",
    "Cream Cheese",
    "Whipped Cream",
    "Half n Half",
    "Cheddar Cheese",
    "Mozzarella",
    "Swiss Cheese",
    "Provolone Cheese",
    "American Cheese",
    "Brie Cheese",
    "Goat Cheese"
]

const meat = [
    "Bacon",
    "Sausage",
    "Chorizo",
    "Hotdogs",
    "Duck",
    "Chicken",
    "Rabbit",
    "Veal",
    "Turkey",
    "Ground Turkey",
    "Ham",
    "Salami",
    "Pork Chops",
    "Lamb",
    "Steak",
    "Ground Beef",
    "Beef Jerky"
]

const veggie = [
    "Broccoli",
    "Brussels Sprouts",
    "Cauliflower",
    "Carrots",
    "Kale",
    "Lettuce",
    "Spinach",
    "Celery",
    "Eggplant",
    "Bell Peppers",
    "Corn",
    "Beets",
    "Potatoes",
    "Sweet Potatoes",
    "Onions",
    "Squash",
    "Zucchini"
]

const pantry = [
    "Pasta",
    "Cereal",
    "Almonds",
    "Cashews",
    "Pistachio",
    "Peanuts",
    "Lima Beans",
    "Rice",
    "Spices",
    "Alfredo Sauce",
    "Peanut Butter",
    "Maple Syrup",
    "Olive Oil",
    "Salt",
    "Sugar",
    "Potato Chips",
    "Bread"
]

const seafood = [
    "Shrimp",
    "Scallops",
    "Clams",
    "Mussels",
    "Squid",
    "Crawfish",
    "Crab",
    "Lobster",
    "Catfish",
    "Cod",
    "Mahimahi",
    "Salmon",
    "Tilapia",
    "Smoked Trout",
    "Sardines",
    "Anchovies",
    "Tuna"
]

const fruit = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Blackberries",
    "Blueberries",
    "Raspberries",
    "Strawberries",
    "Peach",
    "Pear",
    "Plum",
    "Pineapple",
    "Kiwi",
    "Mango",
    "Avacado",
    "Dates",
    "Cherries"
]
class Ingredients extends React.Component {
    state = {
        selected: [],
        currentCategory: "",
        dairy: false,
        meat: false,
        veggie: false,
        pantry: false,
        seafood: false,
        fruit: false,
        searchButton: false,

    }

    toggleCategory = (category) => () => {
        this.setState({
            currentCategory: category,
            searchButton: true
        });
    }


    handleIngredientCheckbox = (event) => {
        const name = event.target.name;
        const { selected } = this.state;
        const index = selected.indexOf(name);
        let newSelected

        if (index < 0) {
            newSelected = [...selected, name];
        } else {
            newSelected = [
                ...selected.slice(0, index),
                ...selected.slice(index + 1)
            ]
        }

        this.setState({
            selected: newSelected
        });

    }

    //     handleSearch() {
    //         unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%2Cflour%2Csugar")
    //             .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
    //             .header("X-RapidAPI-Key", "WPW7FyEBbTmshvFlCq04kYiUjJU8p1BiPTajsn0sk2QRRQeYTY")
    //             .end(function (result) {
    //             console.log("Recipe" + result.status, result.headers, result.body + "found");
    //             });
    // }

    render() {
        console.log(this.state);

        return (
            <div class="category-content">
                <div class="category">
                    <h2>refrigerator</h2>
                    <div class="row about buttons">
                        <img src="./images/mish-mash-icon-yellow-new.png" width="50" alt="Icon" id="icon" />
                        <br></br><br></br>

                        <p class="subhead">Please choose a category below to view a list of ingredients to add to your fridge</p><br></br>

                        <div class="col s4 l2">
                            <button onClick={this.toggleCategory("dairy")} class="dairyBtn">
                                <img src="./images/icon_milk.png" width="35" />
                            </button>
                            <p class="types">Dairy</p>
                        </div>
                        <div class="col s4 l2">
                            <button onClick={this.toggleCategory("meat")} class="meatBtn">
                                <img src="./images/icon_meat.png" width="35" />
                            </button>
                            <p class="types">Meats</p>
                        </div>
                        <div class="col s4 l2">
                            <button onClick={this.toggleCategory("veggie")} class="veggieBtn">
                                <img src="./images/icon_carrot.png" width="35" />
                            </button>
                            <p class="types">Veggies</p>
                        </div>
                        <div class="col s4 l2">
                            <button onClick={this.toggleCategory("pantry")} class="pantryBtn">
                                <img src="./images/icon_bread.png" width="35" />
                            </button>
                            <p class="types">Pantry</p>
                        </div>

                        <div class="col s4 l2">
                            <button onClick={this.toggleCategory("seafood")} class="seafoodBtn">
                                <img src="./images/icon_fish.png" width="35" />
                            </button>
                            <p class="types">Seafood</p>
                        </div>

                        <div class="col s4 l2">
                            <button onClick={this.toggleCategory("fruit")} class="fruitBtn">
                                <img src="./images/icon_apple.png" width="35" />
                            </button>
                            <p class="types">Fruits</p>
                        </div>
                    </div>


                    {this.state.currentCategory === "dairy" ? (
                        <div class="dairy">
                            <div id="dairy-ingred-menu" class="row">
                                {dairy.map(ingredient => (
                                    <div class="col s12 l3">
                                        <form action="#">
                                            <p>
                                                <label>
                                                    <input type="checkbox" name={ingredient} onChange={this.handleIngredientCheckbox} />
                                                    <span>{ingredient}</span>
                                                </label>
                                            </p>
                                        </form>
                                    </div>
                                ))}

                                <div class="prepend-here"></div>

                                <div class="add-ingred input-field col s12 l4">


                                    <input placeholder="Add Additional Ingredient" id="dairy-ingredient" type="text" class="validate" />
                                    <label for="ingredient"></label>
                                </div>
                                <div class="add-ingred input-field col s12 l2">
                                    <a class="btn-floating btn-small waves-effect waves-light z-depth-0 addition" data-category="dairy">
                                        <i class="material-icons add">add</i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    ) : null}

                    {this.state.currentCategory === "meat" ? (
                        <div class="meat">
                            <div id="meat-ingred-menu" class="row">
                                {meat.map(ingredient => (
                                    <div class="col s12 l3">
                                        <form action="#">
                                            <p>
                                                <label>
                                                    <input type="checkbox" name={ingredient} onChange={this.handleIngredientCheckbox} />
                                                    <span>{ingredient}</span>
                                                </label>
                                            </p>
                                        </form>
                                    </div>
                                ))}

                                <div class="prepend-here"></div>

                                <div class="add-ingred input-field col s12 l4">


                                    <input placeholder="Add Additional Ingredient" id="meat-ingredient" type="text" class="validate" />
                                    <label for="ingredient"></label>
                                </div>
                                <div class="add-ingred input-field col s12 l2">
                                    <a class="btn-floating btn-small waves-effect waves-light z-depth-0 addition" data-category="meat">
                                        <i class="material-icons add">add</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {this.state.currentCategory === "veggie" ? (
                        <div class="veggies">
                            <div id="veggie-ingred-menu" class="row">
                                {veggie.map(ingredient => (
                                    <div class="col s12 l3">
                                        <form action="#">
                                            <p>
                                                <label>
                                                    <input type="checkbox" name={ingredient} onChange={this.handleIngredientCheckbox} />
                                                    <span>{ingredient}</span>
                                                </label>
                                            </p>
                                        </form>
                                    </div>
                                ))}

                                <div class="prepend-here"></div>

                                <div class="add-ingred input-field col s12 l4">


                                    <input placeholder="Add Additional Ingredient" id="veggies-ingredient" type="text" class="validate" />
                                    <label for="ingredient"></label>
                                </div>
                                <div class="add-ingred input-field col s12 l2">
                                    <a class="btn-floating btn-small waves-effect waves-light z-depth-0 addition" data-category="veggies">
                                        <i class="material-icons add">add</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {this.state.currentCategory === "pantry" ? (
                        <div class="pantry">
                            <div id="pantry-ingred-menu" class="row">
                                {pantry.map(ingredient => (
                                    <div class="col s12 l3">
                                        <form action="#">
                                            <p>
                                                <label>
                                                    <input type="checkbox" name={ingredient} onChange={this.handleIngredientCheckbox} />
                                                    <span>{ingredient}</span>
                                                </label>
                                            </p>
                                        </form>
                                    </div>
                                ))}

                                <div class="prepend-here"></div>

                                <div class="add-ingred input-field col s12 l4">

                                    <input placeholder="Add Additional Ingredient" id="pantry-ingredient" type="text" class="validate" />
                                    <label for="ingredient"></label>
                                </div>
                                <div class="add-ingred input-field col s12 l2">
                                    <a class="btn-floating btn-small waves-effect waves-light z-depth-0 addition" data-category="pantry">
                                        <i class="material-icons add">add</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {this.state.currentCategory === "seafood" ? (
                        <div class="seafood">
                            <div id="seafood-ingred-menu" class="row">
                                {seafood.map(ingredient => (
                                    <div class="col s12 l3">
                                        <form action="#">
                                            <p>
                                                <label>
                                                    <input type="checkbox" name={ingredient} onChange={this.handleIngredientCheckbox} />
                                                    <span>{ingredient}</span>
                                                </label>
                                            </p>
                                        </form>
                                    </div>
                                ))}

                                <div class="prepend-here"></div>

                                <div class="add-ingred input-field col s12 l4">


                                    <input placeholder="Add Additional Ingredient" id="seafood-ingredient" type="text" class="validate" />
                                    <label for="ingredient"></label>
                                </div>
                                <div class="add-ingred input-field col s12 l2">
                                    <a class="btn-floating btn-small waves-effect waves-light z-depth-0 addition" data-category="seafood">
                                        <i class="material-icons add">add</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {this.state.currentCategory === "fruit" ? (
                        <div class="fruit">
                            <div id="fruit-ingred-menu" class="row">
                                {fruit.map(ingredient => (
                                    <div class="col s12 l3">
                                        <form action="#">
                                            <p>
                                                <label>
                                                    <input type="checkbox" name={ingredient} onChange={this.handleIngredientCheckbox} />
                                                    <span>{ingredient}</span>
                                                </label>
                                            </p>
                                        </form>
                                    </div>
                                ))}

                                <div class="prepend-here"></div>

                                <div class="add-ingred input-field col s12 l4">

                                    <input placeholder="Add Additional Ingredient" id="fruit-ingredient" type="text" class="validate" />
                                    <label for="ingredient"></label>
                                </div>
                                <div class="add-ingred input-field col s12 l2">
                                    <a class="btn-floating btn-small waves-effect waves-light z-depth-0 addition" data-category="fruit">
                                        <i class="material-icons add">add</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {this.state.searchButton === true ? (
                        <button onClick={this.handleSearch} className="btn waves-effect waves-light submit modal-trigger z-depth-0" name="action">Search for Recipes
                    <i class="material-icons right">send</i>

                        </button>
                    ) : null}
                </div>
            </div >

        );
        // closing render }
    } 
}

export default Ingredients;