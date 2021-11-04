import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

export default class Movie extends Component{

    render() {

        return(
            <div className="movieCards">
                <Row xs ={1} md = {2} lg ={2} className="g-4">
                    {this.props.movies && this.props.movies.map(element =>(
                        <Col>
                            <Card key = {element.title}>
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <img src = {element.image_url} alt ={element.title} />
                                    <Card.Text>{element.overview}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
             </div>

        )
        
    }
}