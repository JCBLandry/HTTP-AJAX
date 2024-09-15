import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Friendlist from './components/Friendlist'

class App extends Component{
  render(){
  return (
    <div className="App">
      <Friendlist />
    </div>
  );
}}

export default App;

