import {Component} from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import ReturnCityData from "./ReturnCityData";
import ErrorPopUp from "./ErrorPopUP";
import Weather from "./Weather";
import Movies from "./Movies";

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            cityValue: '',
            searchedCity:null,
            error: false,
            errorStatus: '',
            forecast:[],
            movies:[]
        }
    }

    onChangeOfInput = (inputValue) => {
        this.setState({cityValue:inputValue});
    }

    //create function to pass to the form component
    // needs to capture value of input form and set the state of the main component    
    handleClick = () =>{
        this.requestLocation();

    }
    
    //create function that then uses new state of city to request from LocationIQ
    requestLocation = async () => {
        let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;
        console.log(url);
        try{

            console.log('try');
            //request from locationiq
            let response = await axios.get(url);

            console.log(response);
            
            //captured response object from array response
            let returnedResponse = response.data[0];
    
            this.setState({searchedCity:returnedResponse});
            
            this.requestForecast();
            this.requestMovies();
        } catch (e) {
            if(e){
                console.log(e.response)
                this.setState({error: false});
            }
        }
    }

    // create request for weather data
    requestForecast = async() =>{


        try{
            //create url from the searched city
            let url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.state.searchedCity.lat}&lon=${this.state.searchedCity.lon}`;
            console.log(url);
            
            //send the request to the server
            let response = await axios.get(url);
        
            let forecastData = response.data
        
            this.setState({forecast:forecastData})
        
            console.log(this.state.forecast);

        }
        catch(e){
            if(e){
                console.error('something went wrong');
            }
        }
    }

    requestMovies = async() =>{


        try{
            //create url from the searched city
            let url = `${process.env.REACT_APP_SERVER_URL}/movies?keyword=${this.state.cityValue}`;
            console.log(url);
            //send the request to the server
            let response = await axios.get(url);
          
            let movieArray = response.data
        
            this.setState({movies:movieArray})
        
            console.log(this.state.movies);

        }
        catch(e){
            if(e){
                console.error('something went wrong');
            }
        }
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
                {this.state.forecast && <ReturnCityData displayCard = {this.state.lat} city = {this.state.searchedCity}/>}
                {this.state.forecast && <Weather forecast = {this.state.forecast}/>}
                {this.state.forecast && <Movies movies = {this.state.movies}/>}
            </main>

        )
    }
}