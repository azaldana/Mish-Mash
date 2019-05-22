import React from "react";
import "./style.css";
// import Axios from "axios";

class SubmitForm extends React.Component {
    state = {
        title: "",
        ingredients: "",
        instructions: "",
        totalTime: "",
        servings: "",
        selectedFile: null,
        social: ""
    }

fileSelectedHandler = event => {
    this.setState({
        selectedFile: event.target.files[0]
    })
}

fileUploadHandler = () => {
const fd = new FormData();
fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
// Axios.post('url')
//     .then(res => {
//         console.log(res);
//     });
}


render() {
    
        return (
    
            <div className="container-form">
                <div className="form-content">
    
                    <div className="submit-form" id="submit-form">
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
    
                        <div className="input-field col s6">
                        <input type="file" onChange={this.fileSelectedHandler} />
                        <button 
                        className="btn waves-effect col 12 waves-light z-depth-0"
                        id="submitRecipe"
                        type="submit"
                        name="action"
                        onClick={this.fileUploadHandler}>Submit</button>
                         <i class="material-icons right">send</i>
                        </div>
                    </div>
    
                </div>
            </div>
        )}
    }

export default SubmitForm;