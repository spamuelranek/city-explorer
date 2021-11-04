import { Component } from "react";
// import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Movie from './Movie'

export default class Movies extends Component{

    render() {

        return(
            <div className="movieCards">
                <Row xs={1} sm ={2} className="movies">
                        {this.props.movies && this.props.movies.map(element => <Movie movies = {element}/>)}
                </Row>
            </div>

        )
        
    }
}