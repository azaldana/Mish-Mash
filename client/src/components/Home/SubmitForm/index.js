import React from "react";
import { Textarea, TextInput, Modal, Button } from 'react-materialize';
import "./style.css";
// import Axios from "axios";

class SubmitForm extends React.Component {
    state = {
        title: "",
        ingredients: "",
        instructions: "",
        totalTime: "",
        servings: "",
        social: "",
        image: null,
        image_id: ""
    }

 

    // fileSelectedHandler = event => {
    //     this.setState({
    //         image: event.target.files[0]
    //     })
    // }

    // fileUploadHandler = () => {

    
    // }


    render() {
    return (
<div className="submit-form" id="submit-form">
                        <h2>Family Recipes</h2>
                        <img src="./images/mish-mash-icon-yellow-new.png" width="50" alt="Icon" id="submitIcon" />
                        <br></br>
                       

                    <Modal header="Modal Header" onClick={this.fileUploadHandler} trigger={<Button>Submit</Button>}>
                                <TextInput label="Title" placeholder="" id="form_title" type="text" className="validate" />
                                <Textarea label="Ingredients" placeholder="" className="validate" data-length={150} />
                                <Textarea label="Instructions" placeholder="" className="validate" data-length={350} />
                                <TextInput label="Total Time" placeholder="" id="totalTime" type="text" className="validate" />
                                <TextInput label="Servings" placeholder="" id="servings" type="text" className="validate" />
                                <TextInput label="Social" placeholder="" id="social" type="text" className="validate" />
                                <input type="file" onChange={this.fileSelectedHandler} />
                        </Modal>
                        </div>
                  
                 

)
    
}
}

export default SubmitForm;