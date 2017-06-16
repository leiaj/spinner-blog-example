import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="loader2">
        </div>

        <div>
        <img src={'../loading.gif'}/>
        </div>

        <div>
        <img src={'../loading2.gif'}/>
        </div>

      </div>
    );
  }
}

export default App;
