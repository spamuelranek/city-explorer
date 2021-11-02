import {Component} from 'react';
import Button from 'react-bootstrap/Button';

export default class SearchForm extends Component{

    //function for when the search button is clicked
    //passes the search value back to the Main component
    handleClick = () => {
        this.props.handleClick();

    }

    //function for when new data is put into the search field
    handleInputChange = (e) => this.props.handleOnChange(e.target.value);
    

    render(){
        return(
            <div>
                <input onChange = {this.handleInputChange} value = {this.props.input}/>
                <p>{this.props.input}</p>
                <Button variant ="dark" onClick ={this.handleClick}>Explore!</Button>
            </div>
        )
    }

}