import React from "react";
import "./style.css";

const About = props => {
    return (
        <div className="container-about">
            <div className="about-content">
                <div className="about">
                    <h2>About</h2>
                    <img src="./images/mish-mash-icon-yellow-new.png" width="50" alt="Icon" id="icon"/>
                        <br></br>
                            <p className="subhead">Perfect for when your fridge gets a little strange...</p>
                            <p className="about-text">All of us have been there one time or another, staring into the pantry or refrigerator and
                              thinking, “There’s nothing to eat in this house.” Although you may feel like your options are limited, generally
                              people have 3 weeks worth of meals in their household. So how can you make great meals with those random
                              ingredients you may ask? Well worry no more, because Mish Mash is here to make your life much easier.
                            <br></br>
                                Mish Mash is an ingredient-to-recipe application that takes in user input and provides them with the best recipe
                                per their ingredients. Whether you’re looking for toppings for your avocado toast or what to do with that bag of
                                rice, Mish Mash can assist in providing you with a variety of recipes.
                                <br></br>
                                And its easy! All you have to do is select a category from the refrigerator below and select the ingredients you
                                have and search for a recipe! See easy. We’re here to help. So let’s get cooking!</p>
                </div>
            </div>
        </div>
                                );
                            }
                            
export default About;