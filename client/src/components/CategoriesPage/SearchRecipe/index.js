import React from "react";
import "./style.css";

const Ingredients = props => {
    return (

        <div class="category-content">
            <div class="category">
                <h2>refrigerator</h2>
                <div class="row about buttons">
                    <img src="./images/mish-mash-icon-yellow-new.png" width="50" alt="Icon" id="icon" />
                    <br></br><br></br>

                    <p class="subhead">Please choose a category below to view a list of ingredients to add to your fridge</p><br></br>

                    <div class="col s4 l2">
                        <button class="dairyBtn">
                            <img src="./images/icon_milk.png" width="35"/>
                        </button>
                        <p class="types">Dairy</p>
                    </div>
                    <div class="col s4 l2">
                        <button class="meatBtn">
                            <img src="./images/icon_meat.png" width="35"/>
                        </button>
                        <p class="types">Meats</p>
                    </div>
                    <div class="col s4 l2">
                        <button class="veggieBtn">
                            <img src="./images/icon_carrot.png" width="35"/>
                        </button>
                        <p class="types">Veggies</p>
                    </div>
                    <div class="col s4 l2">
                        <button class="pantryBtn">
                            <img src="./images/icon_bread.png" width="35"/>
                        </button>
                        <p class="types">Pantry</p>
                    </div>

                    <div class="col s4 l2">
                        <button class="seafoodBtn">
                            <img src="./images/icon_fish.png" width="35"/>
                        </button>
                        <p class="types">Seafood</p>
                    </div>

                    <div class="col s4 l2">
                        <button class="fruitBtn">
                            <img src="./images/icon_apple.png" width="35"/>
                        </button>
                        <p class="types">Fruits</p>
                    </div>
                </div>


                <div class="dairy">
                    <div id="dairy-ingred-menu" class="row">
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Eggs</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Butter</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Milk</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Yogurt</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Sour Cream</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Custard</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Cottage Cheese</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Cream Cheese</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Whipped Cream</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Half n Half</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Cheddar Cheese</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Mozzarella Cheese</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Swiss Cheese</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Provolone Cheese</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>American Cheese</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Brie Cheese</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Goat Cheese</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="prepend-here"></div>

                        <div class="add-ingred input-field col s12 l4">


                            <input placeholder="" id="dairy-ingredient" type="text" class="validate" />
                            <label for="ingredient">Add Additional Ingredient</label>
                        </div>
                        <div class="add-ingred input-field col s12 l2">
                            <a class="btn-floating btn-small waves-effect waves-light z-depth-0 addition" data-category="dairy">
                                <i class="material-icons add">add</i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="meat">
                    <div id="meat-ingred-menu" class="row">
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Bacon</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Sausage</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Chorizo</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Hotdogs</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Duck</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Chicken</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Rabbit</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Veal</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Turkey</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Ground Turkey</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Ham</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Salami</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Pork Chops</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Lamb</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Steak</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Ground Beef</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Beef Jerky</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="prepend-here"></div>

                        <div class="add-ingred input-field col s12 l4">


                            <input placeholder="Name of Ingredient" id="meat-ingredient" type="text" class="validate" />
                            <label for="ingredient">Add Additional Ingredient</label>
                        </div>
                        <div class="add-ingred input-field col s12 l2">
                            <a class="btn-floating btn-small waves-effect waves-light z-depth-0 addition" data-category="meat">
                                <i class="material-icons add">add</i>
                            </a>
                        </div>
                    </div>
                </div>


                <div class="veggies">
                    <div id="veggie-ingred-menu" class="row">
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Broccoli</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Brussels Sprouts</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Cauliflower</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Carrots</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Kale</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Lettuce</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Spinach</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Celery</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Eggplant</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Bell Peppers</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Corn</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Beets</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Potatoes</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Sweet Potatoes</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Onions</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Squash</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Zucchini</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="prepend-here"></div>

                        <div class="add-ingred input-field col s12 l4">


                            <input placeholder="Name of Ingredient" id="veggies-ingredient" type="text" class="validate" />
                            <label for="ingredient">Add Additional Ingredient</label>
                        </div>
                        <div class="add-ingred input-field col s12 l2">
                            <a class="btn-floating btn-small waves-effect waves-light z-depth-0 addition" data-category="veggies">
                                <i class="material-icons add">add</i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="pantry">
                    <div id="pantry-ingred-menu" class="row">
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Pasta</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Cereal</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Almonds</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Cashews</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Pistachio</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Peanuts</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Lima Beans</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Rice</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Spices</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Alfredo Sauce</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Peanut Butter</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Maple Syrup</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Olive Oil</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Salt</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Sugar</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Potato Chips</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Bread</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="prepend-here"></div>

                        <div class="add-ingred input-field col s12 l4">

                            <input placeholder="Name of Ingredient" id="pantry-ingredient" type="text" class="validate" />
                            <label for="ingredient">Add Additional Ingredient</label>
                        </div>
                        <div class="add-ingred input-field col s12 l2">
                            <a class="btn-floating btn-small waves-effect waves-light z-depth-0 addition" data-category="pantry">
                                <i class="material-icons add">add</i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="seafood">
                    <div id="seafood-ingred-menu" class="row">
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Shrimp</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Scallops</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Clams</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Mussels</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Squid</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Crawfish</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Crab</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Lobster</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Catfish</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Cod</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Mahimahi</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Salmon</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Tilapia</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Smoked Trout</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Sardines</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Anchovies</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Tuna</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="prepend-here"></div>

                        <div class="add-ingred input-field col s12 l4">


                            <input placeholder="Name of Ingredient" id="seafood-ingredient" type="text" class="validate" />
                            <label for="ingredient">Add Additional Ingredient</label>
                        </div>
                        <div class="add-ingred input-field col s12 l2">
                            <a class="btn-floating btn-small waves-effect waves-light z-depth-0 addition" data-category="seafood">
                                <i class="material-icons add">add</i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="fruit">
                    <div id="fruit-ingred-menu" class="row">
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Apple</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Banana</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Orange</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Grapes</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Blackberries</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Blueberries</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Raspberries</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Strawberries</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Peach</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Pear</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Plum</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Pineapple</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Kiwi</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>

                                        <input type="checkbox" />
                                        <span>Mango</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Avocado</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Dates</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="col s12 l3">
                            <form action="#">
                                <p>
                                    <label>
                                        <input id="checkbox" type="checkbox" />
                                        <span>Cherries</span>
                                    </label>
                                </p>
                            </form>
                        </div>

                        <div class="prepend-here"></div>

                        <div class="add-ingred input-field col s12 l4">

                            <input placeholder="Name of Ingredient" id="fruit-ingredient" type="text" class="validate" />
                            <label for="ingredient">Add Additional Ingredient</label>
                        </div>
                        <div class="add-ingred input-field col s12 l2">
                            <a class="btn-floating btn-small waves-effect waves-light z-depth-0 addition" data-category="fruit">
                                <i class="material-icons add">add</i>
                            </a>
                        </div>
                    </div>
                </div>
                <button class="btn waves-effect waves-light submit modal-trigger z-depth-0" name="action">Search for Recipes
                <i class="material-icons right">send</i>
                </button>
            </div>
        </div >

    );
}

export default Ingredients;