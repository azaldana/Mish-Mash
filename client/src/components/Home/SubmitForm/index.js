import React from "react";
import { Textarea, TextInput, Modal, Button } from 'react-materialize';
import "./style.css";
import API from "../../../utils/API";
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
        image_id: "",
        isSubmitFormModalOpen: false,
    }
    handleChange = (event) => {
        const { submission, value } = event.target;
        this.setState({
            [submission]: value
        });
    }

    handleSubmitForm = () => {
        const { title, ingredients, instructions, totalTime, servings, social, image, image_id } = this.state;
        API.submit({ title, ingredients, instructions, totalTime, servings, social, image, image_id })
            .then(res => {
                alert("Recipe submitted, thank you!");
                this.setState({
                    isSubmitFormModalOpen: false,
                    title: "",
                    ingredients: "",
                    instructions: "",
                    totalTime: "",
                    servings: "",
                    social: "",
                    image: null,
                    image_id: "",
                })
            });
    }
    openSubmitFormModal = () => {
        this.setState({
            isSubmitFormModalOpen: true
        });
    }

    closeSubmitFormModal = () => {
        this.setState({
            isSubmitFormModalOpen: false
        })
    }




    render() {
        const { title, ingredients, instructions, totalTime, servings, social, image, image_id } = this.state;
        // const { submission } = this.props;
        // console.log(submission);
        return (
            <div>
                <h2>Family Recipes</h2>

                <img src={"./images/mish-mash-icon-yellow-new.png"} width="50" alt="Icon" id="submitIcon" />
                <br></br>
                <div>
                    {"submission" ? <Button onClick={this.openSubmitFormModal}>Submission</Button> : (
                        <Button onClick={this.openSubmitFormModal}>Submission</Button>
                        )}
                </div>
        
            {this.state.isSubmitFormModalOpen ? (
                <Modal header="MishMash Recipe" className="black-text submission" open={true}>
                    <br></br>
                    <TextInput label="Title" placeholder="" id="form_title" type="text" className="validate" />
                    <Textarea label="Ingredients" placeholder="" className="validate" data-length={150} />
                    <Textarea label="Instructions" placeholder="" className="validate" data-length={350} />
                    <TextInput label="Total Time" placeholder="" id="totalTime" type="text" className="validate" />
                    <TextInput label="Servings" placeholder="" id="servings" type="text" className="validate" />
                    <TextInput label="Social" placeholder="" id="social" type="text" className="validate" />
                    <input type="file" onChange={this.fileSelectedHandler} />
                </Modal>
            ): null}
        </div>
        )
    }
}
export default SubmitForm;