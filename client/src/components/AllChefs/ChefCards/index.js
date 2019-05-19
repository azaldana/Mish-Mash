import React from "react";
import "./style.css";
import { Row, Col, Card, CardTitle } from 'react-materialize';

const ChefCards = props => {
    return (
        <Row>
        <Col l={3} m={6} s={12}>
        <Card className="chefcard" header={<CardTitle />} actions={[<a />]}>
        Here is the standard card with an image thumbnail.
        </Card>
        </Col>

        <Col l={3} m={6} s={12}>
        <Card header={<CardTitle />} actions={[<a />]}>
        Here is the standard card with an image thumbnail.
        </Card>
        </Col>

        <Col l={3} m={6} s={12}>
        <Card header={<CardTitle />} actions={[<a />]}>
        Here is the standard card with an image thumbnail.
        </Card>
        </Col>

        <Col l={3} m={6} s={12}>
        <Card header={<CardTitle />} actions={[<a />]}>
        Here is the standard card with an image thumbnail.
        </Card>
        </Col>
        </Row>
    );
}

export default ChefCards;