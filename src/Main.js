import {Component} from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import ReturnCityData from "./ReturnCityData";

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            cityValue: '',
            searchedCity:{},
            lat:'',
            long:'',
            mapImage:'',
            showCity:false
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
        let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&&q=${this.state.cityValue}&&format=json`;
        
        //request from locationiq
        let response = await axios.get(url);
        
        //captured response object from array response
        let returnedResponse = response.data[0];

        this.returnedLocation(returnedResponse);
        console.log(this.state.searchedCity);
        this.getLatandLong();

        this.getMap();
    }
    
    // captures the lat and log of the searched object to be processed for the map
    getLatandLong = () => {
        this.setState({lat:this.state.searchedCity.lat});
        this.setState({long:this.state.searchedCity.lon});

    }

    //makes a request to the locationiq for a map picture
    getMap = async() => {
        let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&&center=${this.state.lat},${this.state.long}&&zoom=16&&format=png`
        
        let mapResponse = await axios.get(mapUrl);
        
        this.setState({mapImage:mapResponse.data})

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