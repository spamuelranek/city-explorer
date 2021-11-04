import { Component } from "react";
// import Card from 'react-bootstrap/Card';
// import Row from "react-bootstrap/Row";
// import Col from 'react-bootstrap/Col';
import Movie from './Movie'

export default class Movies extends Component{

    render() {

        return(
            <div className="movieCards">
                {this.props.movies && this.props.movies.map(element => <Movie movies = {element}/>)}
             </div>

        )
        
    }
}