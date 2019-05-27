import React from "react";
import "./style.css";
import { Row, Col, Card, CardTitle, CardMedia } from 'react-materialize';
import { Link } from 'react-router-dom';

const ChefHeader = props => {
    return (
        <div className="chef-container">
            <h2 className="allchef-header">All Chefs</h2>
            <img src="./images/mish-mash-icon-yellow-new.png" width="50" alt="Icon" id="allchefIcon" />
        </div>
    );
}

export default ChefHeader;