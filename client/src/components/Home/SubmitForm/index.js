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
      this.setState({
        isSubmitFormModalOpen: false,
        title: "",
        ingredients: "",
        instructions: "",
        totalTime: "",
        servings: "",
        social: "",
        image: null,
        image_id: ""
      });
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
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={e => {
                const formData = new FormData();
                formData.append("file", e.target.files[0]);
                formData.append("upload_preset", "snnqnung");
                return axios
                  .post(url, formData, {
                    headers: {
                      "Content-Type": "multipart/form-data"
                    }
                  })
                  .then(response => {
                    this.setState({
                      image: response.data.secure_url,
                      image_id: response.data.public_id
                    });
                    // console.log(response.data);
                  });
              }}
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
