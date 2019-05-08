import React from "react";
import "./style.css";

const Chefs = props => {
    return (
        <div className="container-navbar">
            <div className="recipe-content">
                <div className="recipes">
                    <h2>Featured Chefs</h2>
                    <img src="./images/mish-mash-icon-yellow-new.png" width="50" alt="Icon" id="recipeIcon" />
                    <br></br>


                    <div className="row">
                        <div className="col l12">
                            <div className="row">
                                <div className="col s12 l4">

                                    <div className="card">
                                        <div className="card-image">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title"></span>
                                        </div>
                                        <div className="card-action">
                                            <a href="" className="blue-grey-text text-lighten-1 recipeView">View Recipe</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <button class="btn waves-effect col 12 waves-light z-depth-0" id="seeMore" type="submit" name="action">See More Results
        <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Chefs;