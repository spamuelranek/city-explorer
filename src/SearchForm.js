import {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default class SearchForm extends Component{

    //function for when the search button is clicked
    //passes the search value back to the Main component
    handleClick = () => {
        this.props.handleClick();
        // reset();

    }

    //function for when new data is put into the search field
    handleInputChange = (e) => this.props.handleOnChange(e.target.value);
    

    render(){
        return(
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Select a City</Form.Label>
                        <Form.Control type ="text" onChange = {this.handleInputChange} placeholder ="Enter City to Explore" value = {this.props.input}/>
                    </Form.Group>
                    <Button variant ="dark" onClick ={this.handleClick}>Explore!</Button>
                </Form>
            </div>
        )
    }

}