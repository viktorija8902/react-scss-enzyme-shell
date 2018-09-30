import React, { Component } from 'react';
import logo from './../images/logo.svg';
import './../styles/App.scss';
import AnotherFile from './AnotherFile.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AnotherFile test={"test test test"}/>
      </div>
    );
  }
}

export default App;
