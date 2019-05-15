import React from "react";
import "./style.css";

const SubmitForm = props => {
    return (

        <div className="container-form">
            <div className="form-content">

                <div className="submit-form">
                    <h2>Family Recipes</h2>
                    <img src="./images/mish-mash-icon-yellow-new.png" width="50" alt="Icon" id="submitIcon" />
                    <br></br>

                    <div className="row">

                        <div className="input-field col s6">
                            <input placeholder="" id="first_name" type="text" className="validate" />
                            <label for="first_name">First Name</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="" type="text" className="validate" />
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div class="input-field col s12">
                            <input id="password" type="password" class="validate" />
                            <label for="password">Password</label>
                        </div>

                    </div>

                    <button class="btn waves-effect col 12 waves-light z-depth-0" id="submitRecipe" type="submit" name="action">Submit
<i class="material-icons right">send</i>
                </button>


                </div>

            </div>
        </div>

    );
};

export default SubmitForm;