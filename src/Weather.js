import { Component } from "react";
import WeatherDay from "./WeatherDay";


export default class Weather extends Component{

    render(){
        return(
            <div className="forecastCards">
                {this.props.forecast && this.props.forecast.map(element => <WeatherDay element = {element}/>)}
            </div>
        )
    }
}