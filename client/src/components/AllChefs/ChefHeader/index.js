import React from "react";
import "./style.css";

const ChefHeader = () => {
  return (
    <div className="chef-container">
      <h2 className="allchef-header">All Chefs</h2>
      <img
        src="./images/mish-mash-icon-yellow-new.png"
        width="50"
        alt="Icon"
        id="allchefIcon"
      />
    </div>
  );
};

export default ChefHeader;
