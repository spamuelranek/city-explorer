import { Component } from "react";
import Card from 'react-bootstrap/Card';

export default class Movie extends Component{

    render(){
        return(
            <Card key = {this.props.movie.id} style ={{width:'18rem' }} key = {this.props.movies.title}>
                <Card.Body>
                    <Card.Title>{this.props.movies.title}</Card.Title>
                    {(this.props.movies.image_url !== 'https://image.tmdb.org/t/p/w500null') && <img src = {this.props.movies.image_url} alt ={this.props.movies.title} />}
                    <Card.Text>{this.props.movies.overview}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}