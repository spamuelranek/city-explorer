import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

export default class Movie extends Component{

    render(){
        return(
            <Row xs ={1} md = {2} lg ={2} className="g-4">
                <Col>
                    <Card key = {this.props.movies.title}>
                        <Card.Body>
                            <Card.Title>{this.props.movies.title}</Card.Title>
                            <img src = {this.props.movies.image_url} alt ={this.props.movies.title} />
                            <Card.Text>{this.props.movies.overview}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}