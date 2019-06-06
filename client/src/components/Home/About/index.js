import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="container-about">
      <div className="about-content">
        <div className="about">
          <h2>Inside the Kitchen</h2>
          <img
            src="./images/mish-mash-icon-yellow-new.png"
            width="50"
            alt="Icon"
            id="icon"
          />
          <br />
          <p className="subhead">
            Perfect for when your fridge gets a little strange...
          </p>
          <p className="about-text">
            Ever find yourself opening your fridge and pantry only to discover
            ingredients that seemingly don't go together or leave you 
            gastronomically uninspired? Not wanting to order in and knowing you 
            have the materials to whip up a delicious meal - your search takes you 
            down the path of scrolling through recipes on Google. Unsuccessful with 
            your hunt you ask, " How can I make a great meal with my random
            ingredients?" Well worry no more, because Mish Mash was created for
            instances just like this!
            <br />
            <br />
            Mish Mash is a social platform for chefs and foodies to access and
            share food inspirations, trends and recipes. Whether you're wanting
            to see what your neighbor is eating, experience different cultural 
            cuisines, strategize your next grocery shopping trip, or search for 
            recipes based on your fridge and pantry contents - Mish Mash will 
            will keep you up-to-date with recipes, industry 
            trends and techniques via user “Family Recipe” submissions and 
            weekly updated YouTube videos and blog posts.    
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
