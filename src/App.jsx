import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Im Here NOW!</h1>
        </header>
        <p className="App-intro">
          Change our app name?
        </p>
        <div>
          <button> click me </button>
        </div>
      </div>
    );
  }
}

export default App;