import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataPoller from './DataPoller';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <DataPoller/>
      </div>
    );
  }
}

export default App;
