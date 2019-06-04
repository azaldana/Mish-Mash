import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  createPost: function(data) {
    return axios.post("/api/posts", data);
  },
  signup: function(data) {
    return axios.post("/api/users/signup", data);
  },
  login: function(data) {
    return axios.post("/api/users/login", data);
  },
  validateToken: function(t) {
    return axios.post("/api/users/validate", { token: t });
  },
  submitForm: function(data) {
    return axios.post("/api/form/create", data);
  },
  getCategories: function(query) {
    return axios.post("/api/categories", query);
  },
  getRecipes: function(query) {
    console.log("query",query);
    return axios.get("/api/recipes", query);
  },
  searchRecipes: function(query){
    return axios.post("/api/searchrecipes", query);
  }
};
