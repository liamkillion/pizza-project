import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PizzaTopLevel from './components/PizzaTopLevel'
import ToppingTopLevel from './components/ToppingTopLevel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Welcome to the Pizza Party</h1>
        <PizzaTopLevel />
        <ToppingTopLevel />
      </div>
    );
  }
}

export default App;
