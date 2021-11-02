import {Component} from "react";
import axios from "axios";
import SearchForm from "./SearchForm";

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            cityValue: '',
            searchedCity:{}
        }
    }

    onChangeOfInput = (inputValue) => {
        this.setState({cityValue:inputValue});
    }

    //create function to pass to the form component
    // needs to capture value of input form and set the state of the main component    
    handleClick = (city) =>{
        // console.log(city);
        // let capturedCity = city;
        // this.setState({cityValue: capturedCity})
        console.log(this.state.cityValue);
        this.requestLocation();
    }
    
    //create function that then uses new state of city to request from LocationIQ
    requestLocation = async () => {
        let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&&q=${this.state.cityValue}&&format=json`;
        
        let response = await axios.get(url)
        
        let returnedResponse = response.data[0];
        console.log(response.data);
        console.log(response.data[0]);
        this.returnedLocation(returnedResponse);
        console.log(this.state.searchedCity);
    }
    
    //sets the searchedCity state from the returned data
    returnedLocation = (returnedCities) =>{
        this.setState({searchedCity:returnedCities});
    }

    render(){
        return(
            <main>
                <SearchForm handleClick = {this.handleClick} handleOnChange ={this.onChangeOfInput} input ={this.state.cityValue}/>
                <ReturnCityData city = {this.state.searchedCity}/>
            </main>

        )
    }
}