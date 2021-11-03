import { Component } from "react";
import Card from 'react-bootstrap/Card';

export default class Weather extends Component{

    cardCreation = (element) => {
        <Card style = {{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{element.date}</Card.Title>
                <Card.Text>{element.description}</Card.Text>
            </Card.Body>
        </Card>
    }

    render(){
        return(
            <div>
                {this.props.forecast.map(element =>{
                    return (
                     <Card style = {{ width: '18rem'}}>
                     <Card.Body>
                         <Card.Title>{element.date}</Card.Title>
                         <Card.Text>{element.description}</Card.Text>
                     </Card.Body>
                 </Card>
                    )
                })
            }

            </div>
        )
    }
}