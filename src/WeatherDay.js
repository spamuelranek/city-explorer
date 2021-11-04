import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'

export default class WeatherDay extends Component{

    render(){
        return(
            <Row className="g-4">
                <Col>
                    <Card key = {this.props.element.hour}>
                        <Card.Body>
                            <Card.Title>{this.props.element.hour}</Card.Title>
                            <Card.Text>Temp: {this.props.element.tempMax}c - {this.props.element.tempMin}c</Card.Text>
                            <Card.Text>Chance of percipitation: {this.props.element.pop}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}