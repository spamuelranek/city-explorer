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
            <Card style={{width: '18rem'}}>
                {this.props.displayCard&& 
                        <Card.Body>
                            <Card.Title>{this.props.city.display_name}</Card.Title>
                            <img src = {this.props.map} alt ={this.props.city.display_name}/>
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