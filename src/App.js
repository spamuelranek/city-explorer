import logo from './logo.svg';
import './App.css';
import Component from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'

class App extends Component{

  render(){
    return(
      <Header/>
      <Main/>
      <Footer/>
    )
  }

}

export default App;
