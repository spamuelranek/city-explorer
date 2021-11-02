import {Component} from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import ReturnCityData from "./ReturnCityData";

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            cityValue: '',
            searchedCity:null,
        }
    }

    onChangeOfInput = (inputValue) => {
        this.setState({cityValue:inputValue});
    }

    //create function to pass to the form component
    // needs to capture value of input form and set the state of the main component    
    handleClick = () =>{
        this.requestLocation();
        this.setState({showCity:true});

    }
    
    //create function that then uses new state of city to request from LocationIQ
    requestLocation = async () => {
        let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;
        
        //request from locationiq
        let response = await axios.get(url);
        
        //captured response object from array response
        let returnedResponse = response.data[0];

        this.returnedLocation(returnedResponse);
    }
    

    //sets the searchedCity state from the returned data
    returnedLocation = (returnedCities) =>{
        this.setState({searchedCity:returnedCities});
    }

    render(){
        return(
            <main>
                <SearchForm handleClick = {this.handleClick} handleOnChange ={this.onChangeOfInput} input ={this.state.cityValue}/>
                <ReturnCityData displayCard = {this.state.lat} city = {this.state.searchedCity} map = {this.state.mapImage}/>
            </main>

        )
    }
}