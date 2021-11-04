import { Component } from "react";
import Card from 'react-bootstrap/Card';


export default class WeatherDay extends Component{

    render(){
        return(
            <Card style = {{width:'15rem'}}key = {this.props.element.hour}>
                <Card.Body>
                    <Card.Title>{this.props.element.hour}</Card.Title>
                    <Card.Text>Temp: {this.props.element.tempMax}c - {this.props.element.tempMin}c</Card.Text>
                    <Card.Text>Chance of percipitation: {this.props.element.pop}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}