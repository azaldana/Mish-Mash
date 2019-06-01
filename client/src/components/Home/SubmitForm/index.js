import React from "react";
import { Textarea, TextInput, Modal, Button } from "react-materialize";
import "./style.css";
import API from "../../../utils/API";
import axios from "axios";


const url = "https://api.cloudinary.com/v1_1/mish-mash/image/upload";

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
    isSubmitFormModalOpen: false
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFileChange = event => {
    const { files, value } = event.target;
    console.log(files[0]);
    console.log(value);
    this.setState({
      image: files[0]
    });
  };

  handleSubmitForm = () => {
    const {
      title,
      ingredients,
      instructions,
      totalTime,
      servings,
      social,
      image,
      image_id
    } = this.state;
    const { submission } = this.props;
    API.submitForm({
      title,
      ingredients,
      instructions,
      totalTime,
      servings,
      social,
      image,
      image_id
    }).then(res => {
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

                <p className="subhead">Are you the Chef Ramsay of your friends, reigning supreme in the kitchen? <br></br> If so, place your bid in for Top Chef -- Submit, Rate, Share!</p>
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
                            // label="Title"
                            icon="filter_1"
                            placeholder="TITLE: Ice Cubes"
                            id="form_title"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <Textarea
                            name="ingredients"
                            value={ingredients}
                            // label="Ingredients"
                            icon="filter_2"
                            placeholder="2 cups of water, 2 tablespoons of water, etc."
                            className="validate"
                            data-length={150}
                            onChange={this.handleChange}
                        />

                        <Textarea
                            name="instructions"
                            value={instructions}
                            label="Instructions"
                            icon="filter_3"
                            placeholder="1. Mix 2 cups of water with 2 tablespoons of water  2. Add more water to taste 3. Pour water into ice cube tray 4. Freeze water"
                            className="validate instructions"
                            data-length={350}
                            onChange={this.handleChange}
                        />

                        <TextInput
                            name="totalTime"
                            value={totalTime}
                            // label="Total Time"
                            icon="filter_4"
                            placeholder="90 minutes"
                            id="totalTime"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <TextInput
                            name="servings"
                            value={servings}
                            // label="Servings"
                            icon="filter_5"
                            placeholder="4 glasses"
                            id="servings"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        <TextInput
                            name="social"
                            value={social}
                            // label="Social"
                            icon="filter_6"
                            placeholder="@IceCube"
                            id="social"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />

                        {/* <input
                            name="image"
                            type="file"
                            icon="fliter_7"
                            onChange={this.handleFileChange} /> */}

                        <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/png, image/jpeg"
                            onChange={e => {
                                const formData = new FormData();
                                formData.append("file", e.target.files[0]);
                                formData.append("upload_preset", "snnqnung");
                                return axios.post(url, formData, {
                                    headers: {
                                        "Content-Type": "multipart/form-data"
                                    }
                                }).then(response => {console.log(response.data.secure_url)});
                            }}
                        />

                        < Button className="submit-form-button" onClick={this.handleSubmitForm} > Submit</Button>
                    </Modal>
                ) : null}
            </div>
        );
    }
    
        image_id: ""
      });
    });
  };

  openLoginModal = () => {
    this.setState({
      isLoginModalOpen: true
    });
  };

  openSubmitFormModal = event => {
    event.preventDefault();
    this.setState({
      isSubmitFormModalOpen: true
    });
  };

  closeSubmitFormModal = () => {
    this.setState({
      isSubmitFormModalOpen: false
    });
  };

  render() {
    const {
      title,
      ingredients,
      instructions,
      totalTime,
      servings,
      social
    } = this.state;
    const { submission } = this.props;
    const { user } = this.props;
    // console.log(submission);
    return (
      <div className="submit-form" id="submit-form">
        <h2>Family Recipes</h2>

        <img
          src="./images/mish-mash-icon-yellow-new.png"
          width="50"
          alt="Icon"
          id="submitIcon"
        />
        <br />

        <p className="subhead">
          Are you the Chef Ramsay of your friends, and reign supreme in the
          kitchen? <br />
          Place your bid in for Top Chef -- Submit, Rate Share!
        </p>
        <br />
        <img
          className="mockup-recipe"
          src="./images/recipe_layout.jpg"
          width="1000"
          alt="Recipe Page Mockup"
        />

        {user ? (
          <Button
            className="submit-form-button"
            onClick={this.openSubmitFormModal}
          >
            Submit Your Recipe
          </Button>
        ) : null}

        {user ? null : (
          <Button
            className="white-text valign-wrapper submit-form-button"
            onClick={this.openLoginModal}
          >
            Login to submit recipe
          </Button>
        )}

        {this.state.isSubmitFormModalOpen ? (
          <Modal
            header="Submit Your Family Recipe"
            className="black-text submission"
            open={true}
          >
            <br />
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
              onChange={this.handleFileChange}
            />
            <br />

            <Button
              className="submit-form-button"
              onClick={this.handleSubmitForm}
            >
              Submit
              <i class="material-icons right">send</i>
            </Button>
            <Button
              onClick={this.closeSubmitFormModal}
              className="submit-form-button"
            >
              Close
              <i class="material-icons right">close</i>
            </Button>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default SubmitForm;
