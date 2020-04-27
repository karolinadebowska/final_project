import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import Nav from './nav'
import Carousel from './carousel'
import Footer from './footer'
import Instagram from './instagram'
import About from './about'

function updateState(page){
    this.setState({page})
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false,
            page:'home',
            text:''
        }
    }
    static getDerivedStateFromProps(props, state) {
        return {text: props.text };
    }
    render(){
  return (
      <div id="wrapper">
          <Nav isSignedIn={this.state.isSignedIn}/>
          <Carousel/>
          <div className="contentBox">{this.props.page}
          </div>
          <Instagram/>
          <Footer/>
      </div>
  );}
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

export default App;
