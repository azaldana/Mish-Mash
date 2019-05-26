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
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmitForm = () => {
        const { title, ingredients, instructions, totalTime, servings, social, image, image_id } = this.state;
        const { submission } = this.props;
        API.submitForm({ title, ingredients, instructions, totalTime, servings, social, image, image_id })
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

    openSubmitFormModal = (event) => {
        event.preventDefault();
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
        const { title, ingredients, instructions, totalTime, servings, social } = this.state;
        const { submission } = this.props;
        // console.log(submission);
        return (
            <div>
                <h2>Family Recipes</h2>

                <img src={"./images/mish-mash-icon-yellow-new.png"} width="50" alt="Icon" id="submitIcon" />
                <br></br>

                {submission ? null : (
                    <Button className="submit-form-button" onClick={this.openSubmitFormModal}>Submit</Button>
                )}

                {this.state.isSubmitFormModalOpen ? (
                    <Modal header="MishMash Recipe" className="black-text submission" open={true}>
                        <br></br>
                        <TextInput
                            name="title"
                            value={title}
                            label="Title"
                            placeholder=""
                            id="form_title"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <Textarea
                            name="ingredients"
                            value={ingredients}
                            label="Ingredients"
                            placeholder=""
                            className="validate"
                            data-length={150}
                            onChange={this.handleChange}
                        />

                        <Textarea
                            name="instructions"
                            value={instructions}
                            label="Instructions"
                            placeholder=""
                            className="validate"
                            data-length={350}
                            onChange={this.handleChange}
                        />

                        <TextInput
                            name="totalTime"
                            value={totalTime}
                            label="Total Time"
                            placeholder=""
                            id="totalTime"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <TextInput
                            name="servings"
                            value={servings}
                            label="Servings"
                            placeholder=""
                            id="servings"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <TextInput
                            name="social"
                            value={social}
                            label="Social"
                            placeholder=""
                            id="social"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <input
                            type="file"
                            onChange={this.fileSelectedHandler} />

                        <Button onClick={this.handleSubmitForm}>Submit</Button>
                    </Modal>
                ) : null}
            </div>
        );
    }
}

export default SubmitForm;