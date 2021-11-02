import { Component } from "react";

export default class ReturnCityData extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchedCity:this.props.city
        }
    }
}