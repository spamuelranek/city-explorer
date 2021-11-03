import { Component } from "react";
import Card from "react-bootstrap/Card";

export default class ReturnCityData extends Component{


    changeName = () =>{
        let newName = this.props.city.display_name.split(',');
        let cityName = newName[0];
        console.log(cityName);
        this.setState({cityTitle: cityName});
        
    }

    render(){
        return(
            <Card>
                {this.props.city&& 
                        <Card.Body>
                            <Card.Title>{this.props.city.display_name}</Card.Title>
                            <img src ={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.props.city.lat},${this.props.city.lon}&zoom=16&format=png`} alt ={this.props.city.display_name}/>
                            <Card.Text>
                                Lat:{this.props.city.lat}
                            </Card.Text>
                            <Card.Text>
                                Longitude:{this.props.city.lon}
                            </Card.Text>
                        </Card.Body>
                }
                </Card>

        )

    }
}