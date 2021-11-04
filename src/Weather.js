import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'


export default class Weather extends Component{

    render(){
        return(
            <div className="forecastCards">
                <Row className="g-4">
                    {this.props.forecast && this.props.forecast.map(element =>(
                        <Col>
                            <Card key = {element.hour}>
                                <Card.Body>
                                    <Card.Title>{element.hour}</Card.Title>
                                    <Card.Text>Temp: {element.tempMax}c - {element.tempMin}c</Card.Text>
                                    <Card.Text>Chance of percipitation: {element.pop}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}