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
            <div className="submit-form">
                <h2>Family Recipes</h2>

                <img src="./images/mish-mash-icon-yellow-new.png" width="50" alt="Icon" id="submitIcon" />
                <br></br>

                <p className="recipe-abouttext">We need to include some text. Example text could be something like-Do you love cooking and experimenting with different ingredients? Are you the talk of your friend group and love creating new recipes? Join the Mish Mash community and submit your own recipe for others to rate, share and review. </p>
                <img className="mockup-recipe" src="./images/recipe_layout.jpg" width="1000" alt="Recipe Page Mockup" />

                {submission ? null : (
                    <Button className="submit-form-button" onClick={this.openSubmitFormModal}>Submit Your Recipe</Button>
                )}

                {this.state.isSubmitFormModalOpen ? (
                    <Modal header="MishMash Recipe" className="black-text submission" open={true}>
                        <br></br>
                        <TextInput
                            name="title"
                            value={title}
                            label="Title"
                            placeholder="Ice Cubes"
                            id="form_title"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <Textarea
                            name="ingredients"
                            value={ingredients}
                            label="Ingredients"
                            placeholder="2 cups of water, 2 tablespoons of water, etc."
                            className="validate"
                            data-length={150}
                            onChange={this.handleChange}
                        />

                        <Textarea
                            name="instructions"
                            value={instructions}
                            label="Instructions"
                            placeholder="1. Mix 2 cups of water with 2 tablespoons of water  2. Add more water to taste 3. Pour water into ice cube tray 4. Freeze water"
                            className="validate instructions"
                            data-length={350}
                            onChange={this.handleChange}
                        />

                        <TextInput
                            name="totalTime"
                            value={totalTime}
                            label="Total Time"
                            placeholder="90 minutes"
                            id="totalTime"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <TextInput
                            name="servings"
                            value={servings}
                            label="Servings"
                            placeholder="4 glasses"
                            id="servings"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <TextInput
                            name="social"
                            value={social}
                            label="Social"
                            placeholder="@IceCube"
                            id="social"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <input
                            name="image"
                            type="file"
                            onChange={this.handleFileChange} />

                        <Button className="submit-form-button" onClick={this.handleSubmitForm}>Submit</Button>
                    </Modal>
                ) : null}
            </div>
        );
    }
}

export default SubmitForm;