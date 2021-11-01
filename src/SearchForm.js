import Component from 'react';
import Button from 'react-bootstrap/Button';

export default class SearchForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:''
        }
    }

    //function for when the search button is clicked
    //passes the search value back to the Main component
    handleClick = () => {
        let searchQuery = this.state.inputValue;
        this.props.handleClick(searchQuery);

    }

    //function for when new data is put into the search field
    handleInputChange = (e) => this.setState({inputValue:e.target.value})
    

    render(){
        return(
            <div>
                <input onChange = {this.handleInputChange} value = {this.state.inputValue}/>
                <p>{this.state.inputValue}</p>
                <Button variant ="dark" onClick ={this.handleClick}>Search</Button>
            </div>
        )
    }

}