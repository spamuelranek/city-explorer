import { Component } from "react";
import Card from 'react-bootstrap/Card';


export default class Weather extends Component{

    hourManage = (element) =>{
        let split = element.split('T');
        let hour = split[1];
        return hour;
    }

    render(){
        return(
            <div className="forecastCards">
                {this.props.forecast && this.props.forecast.map(element =>{
                    return (
                        <Card key = {element.hour}>
                            <Card.Body>
                                <Card.Title>{this.hourManage(element.hour)}</Card.Title>
                                <Card.Text>Temp: {element.temp}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }

            </div>
        )
    }
}