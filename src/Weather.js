import { Component } from "react";
import Card from 'react-bootstrap/Card';

export default class Weather extends Component{

    render(){
        return(
            <div className="forecastCards">
                {this.props.forecast.map(element =>{
                    return (
                        <Card key = {element.date}>
                            <Card.Body>
                                <Card.Title>{element.date}</Card.Title>
                                <Card.Text>{element.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }

            </div>
        )
    }
}