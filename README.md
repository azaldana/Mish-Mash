# Mish Mash

A full-stack application that uses Express, Mongoose, Cloudinary, and React, deployed on Heroku. 
A social platform for chefs and foodies to access and share food inspirations, trends, and recipes- utilizing the Spoonacular API.

[Mish Mash Link](https://guarded-depths-70836.herokuapp.com/ "Mish-Mash Link")


## Description

The goal of this application is to create a social platform for chefs and foodies- to search, share, and exchange recipes.
Mish Mash keeps users up-to-date on industry trends and techniques through weekly updated YouTube videos and blog posts.

+ The user will click the corresponding link in the navigation bar to Sign Up/Log In, modals will pop up with input form. JSON Web Token and Bcrypt are used for user authentication; this user data is stored in the database using Mongoose. 

+ The 'Top Rated Chefs' section showcases the community's favorite user-submitted recipes. 

+ The 'All Chefs' link will render a page that showcases all user-submitted recipes on the Mish Mash platform.

+ At the bottom of the Home page, the user has the ability to submit their own 'Family Recipe.' Each recipe submission is required to include the following: Title, Ingredients, Instructions, Total Time, Servings Size, Instagram Social ID, and an uploaded Image. We utilize Cloudinary in order to store the image, and the entire submission is saved in the database using Mongoose. Once submitted, the 'Family Recipe' will be added to the 'All Chefs' page.

+ Each recipe on the 'All Chefs' page is displayed in a card, with the option to view the entire recipe's breakdown. Each recipe has the following information: Title, Ingredients, Instructions, Total Time, Servings Size, Instagram Social ID,  Image, and opportunity for rating.

+ In the Refrigerator, users will choose from the categories of ingredients, checkmarks signify choice. Users have the ability to add other ingredients in the input field. Once all chosen ingredients have been checked or added, Users will click the 'Search For Recipes' button. This information is then saved in the database, and a call is made to the Spoonacular API. Six matches will display, with the option to 'View Recipe.'



## Sample View

![Mish Mash App Screenshot](/images/screenshot.jpg/)


## Library 

+ Font Awesome
+ React Materialize
+ Mongoose
+ Unirest
+ JSON Web Token, Bcrypt

## Technology

+ Javascript
+ HTML5
+ CSS3
+ Node.js - Express
+ Body-Parser
+ Cloudinary
+ React Ratings Declarative

## API List

+ Spoonacular

