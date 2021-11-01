import Component from "react";
import axios from "axios";

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            cityValue: '',
            searchedCity:''
        }
    }

    //create function to pass to the form component
    // needs to capture value of input form and set the state of the main component    
    handleClick = (city) =>{
        this.setState({cityValue:city})
        this.requestLocation();
    }

    //sets the searchedCity state from the returned data
    returnedLocation = (returnedCities) =>{
        this.setState({searchedCity:returnedCities[0]});
    }

    //create function that then uses new state of city to request from LocationIQ
    requestLocation = async () => {
        let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&&q=${this.state.cityValue}&&format=json`

        let response = await axios.get(url)

        this.returnedLocation(response);
    }

    render(){
        return(
            <SearchForm handleClick = {this.handleClick}/>

        )
    }
}