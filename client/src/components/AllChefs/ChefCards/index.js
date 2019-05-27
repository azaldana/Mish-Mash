import React from "react";
import "./style.css";
import { Row, Col, Card, CardTitle, CardMedia } from 'react-materialize';
import { Link } from 'react-router-dom';

const ChefCards = props => {
    return (
        <div class="col s12 m7 l4">
            <div class="card chefcard">
                <div class="card-image">
                    <img src={props.image} />
                    <span class="card-title">{props.title}</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                    <a href="#">This is a link</a>
                </div>
            </div>
        </div>
    );
}

export default ChefCards;