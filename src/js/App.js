import React, { Component } from 'react';
import logo from './../images/logo.svg';
import './../styles/App.scss';
import AnotherFile from './AnotherFile.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, error: false };
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/box/city?bbox=15,50,120,100&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        console.log(response)
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      })
      .then(data => this.setState({ data: JSON.stringify(data.list) }))
      .catch(error => {
        this.setState({ error: true})
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.data}
        {this.state.error && <div>Error!!</div>}
        <AnotherFile test={"test test test"}/>
      </div>
    );
  }
}

export default App;
