import { Component } from "react";
import Card from 'react-bootstrap/Card';

export default class Weather extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    cardCreation = (element) => {
        <Card style = {{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{element.date}</Card.Title>
                <Card.Text>{element.description}</Card.Text>
            </Card.Body>
        </Card>
    }

    // render(){
    //     return(
    //         {response.map(element => cardCreation(element))}
    //     )
    // }
}