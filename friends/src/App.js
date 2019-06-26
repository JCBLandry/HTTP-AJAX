import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from "axios";
import Friendlist from './components/Friendlist'

class App extends Component{
state = {
  friends: []
}
	componentDidMount() {
		axios.get('http://localhost:5000/friends')
			.then(response => {this.setState({ friends: response.data})})
			.catch(err => {
				console.log('Error:', err)
      })
      
	}
  render(){
    console.log(this.state);
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      <p>{this.state.name}</p>
      <Friendlist friends={this.friends} />
    </div>
  );
}}

export default App;
