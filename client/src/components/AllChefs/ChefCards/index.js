import React from "react";
import "./style.css";
import { Row, Col, Card, CardTitle, CardMedia } from 'react-materialize';
import { Link } from 'react-router-dom';

const ChefCards = props => {
    const { handleSend } = props;
    return (
        <div class="col s12 m7 l4">
            <div class="card chefcard">
                <div class="card-image">
                    <img src={props.image} />
                </div>
                <div class="card-content">
                    <span class="card-title allchef-title">{props.title}</span>
                    <br></br>
                    <p className="all-chef-instructions">Recipe by: {props.social}</p>
                </div>
                <div class="card-action">
                <Link
                    to="/onechef"
                    onClick={handleSend}>
                    View Recipe
                </Link>
                </div>
            </div>
        </div>
    );
}

export default ChefCards;