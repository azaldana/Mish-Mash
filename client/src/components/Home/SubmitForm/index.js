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

    handleFileChange = (event) => {
        const { files, value } = event.target;
        console.log(files[0]);
        console.log(value);
        this.setState({
            image: files[0]
        })
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
            <div className="submit-form" id="submit-form">
                <h2>Family Recipes</h2>

                <img src="./images/mish-mash-icon-yellow-new.png" width="50" alt="Icon" id="submitIcon" />
                <br></br>

                <p className="recipe-abouttext">We need to include some text. Example text could be something like-Do you love cooking and experimenting with different ingredients? Are you the talk of your friend group and love creating new recipes? Join the Mish Mash community and submit your own recipe for others to rate, share and review. </p>
                <img className="mockup-recipe" src="./images/recipe_layout.jpg" width="1000" alt="Recipe Page Mockup" />

                {submission ? null : (
                    <Button className="submit-form-button" onClick={this.openSubmitFormModal}>Submit Your Recipe</Button>
                )}

                {this.state.isSubmitFormModalOpen ? (
                    <Modal header="Submit Your Family Recipe" className="black-text submission" open={true}>
                        <br></br>
                        <TextInput
                            icon="restaurant_menu"
                            name="title"
                            value={title}
                            // label="Title"
                            placeholder="Title"
                            id="form_title"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <Textarea
                            icon="list"
                            name="ingredients"
                            value={ingredients}
                            // label="Ingredients"
                            placeholder="Ingredients"
                            className="validate"
                            data-length={150}
                            onChange={this.handleChange}
                        />

                        <Textarea
                            icon="format_list_numbered"
                            name="instructions"
                            value={instructions}
                            // label="Instructions"
                            placeholder="Instructions"
                            className="validate instructions"
                            data-length={350}
                            onChange={this.handleChange}
                        />

                        <TextInput
                            icon="query_builder"
                            name="totalTime"
                            value={totalTime}
                            // label="Total Time"
                            placeholder="Total Time"
                            id="totalTime"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <TextInput
                            icon="clear_all"
                            name="servings"
                            value={servings}
                            // label="Servings"
                            placeholder="Servings"
                            id="servings"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <TextInput
                            icon="tag_faces"
                            name="social"
                            value={social}
                            // label="Social"
                            placeholder="Social"
                            id="social"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <input
                            name="image"
                            type="file"
                            className="validate"
                            onChange={this.handleFileChange} />
                            <br></br>

                        <Button className="submit-form-button" onClick={this.handleSubmitForm}>Submit
                        <i class="material-icons right">send</i>
                        </Button>
                        <Button
                                onClick={this.closeSubmitFormModal}
                                className="submit-form-button">Close
                                <i class="material-icons right">close</i>
                            </Button>
                    </Modal>
                ) : null}
            </div>
        );
    }
}

export default SubmitForm;