import { Component } from "react";
import Row from "react-bootstrap/Row";
import WeatherDay from "./WeatherDay";


export default class Weather extends Component{

    render(){
        return(
            <div className="forecastCards">
                <Row>
                        {this.props.forecast && this.props.forecast.map(element => <WeatherDay element = {element}/>)}
                </Row>
            </div>
        )
    }
}