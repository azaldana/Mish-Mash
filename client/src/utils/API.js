import axios from 'axios';

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get('/api/posts');
  },
  createPost: function(data) {
    return axios.post('/api/posts', data);
  },
  signup: function(data) {
    return axios.post('/api/users/signup', data);
  },
  login: function(data) {
    return axios.post('/api/users/login', data);
  },
  validateToken: function(t) {
    return axios.post('/api/users/validate', { token: t });
  },
  submitForm: function(data){
    // return axios.post('/api/form/create', data);
    const formData = new FormData();
    const { title, ingredients, instructions, totalTime, servings, social, image, image_id } = data;
    formData.append('title', title);
    formData.append('ingredients', ingredients);
    formData.append('instructions', instructions);
    formData.append('totalTime', totalTime);
    formData.append('servings', servings);
    formData.append('social', social);
    formData.append('image', image);
    formData.append('image_id', image_id );
    return axios.post('/api/form/create', data, {
      // headers: {
      //   "Content-type": "multiform/form-data"
      // }
    });
  },
  getCategories: function(query) {
    return axios.post('/api/categories', query);
  },
  getRecipes: function(query) {
    return axios.post('/api/recipes', query);
  },
  
};