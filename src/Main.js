import {Component} from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import ReturnCityData from "./ReturnCityData";
import ErrorPopUp from "./ErrorPopUP";
import Weather from "./Weather";

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            cityValue: '',
            searchedCity:null,
            error: false,
            errorStatus: '',
            forecast:[]
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
        try{

            //request from locationiq
            let response = await axios.get(url);
            
            //captured response object from array response
            let returnedResponse = response.data[0];
    
            this.returnedLocation(returnedResponse);
            this.requestForecast();
        } catch (e) {
            let modifiedResponse = e.response.status;
            console.log(modifiedResponse);
            this.setState({error: true});
            this.setState({errorStatus:modifiedResponse});
        }
    }

    // this will send to our server to gather forecast 
    requestForecast = async() =>{
        let cityName = this.manipulateDiplayName(this.state.searchedCity.display_name);



        let url = `http://localhost:3001/weather?city_name=${cityName}&lat=${this.state.searchedCity.lat}&lon=${this.state.searchedCity.lon}`;

        let response = await axios.get(url);

        console.log(response.data);

        let forecastData = response.data

        this.setState({forecast:forecastData})

        console.log(this.state.forecast);
    }

    // this will make the name work for the search query
    manipulateDiplayName = (displayName) => {
        let split = displayName.split(',');
        let splice = split.splice(0,1);
        let displayCityName = splice[0];
        return displayCityName;

    }

    //sets the searchedCity state from the returned data
    returnedLocation = (returnedCities) =>{
        this.setState({searchedCity:returnedCities});
    }

    // creates function to pass to error pop up to be able to close modal
    closeErrorModal = () =>{
        this.setState({error:false});
    }

    render(){
        return(
            <main>
                <ErrorPopUp closeModal = {this.closeErrorModal} errorStatus={this.state.errorStatus} show={this.state.error}/>
                <SearchForm handleClick = {this.handleClick} handleOnChange ={this.onChangeOfInput} input ={this.state.cityValue}/>
                <ReturnCityData displayCard = {this.state.lat} city = {this.state.searchedCity} map = {this.state.mapImage}/>
                <Weather forecast = {this.state.forecast}/>
            </main>

        )
    }
}