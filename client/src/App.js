import React, { Component } from "react"
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <div className="App">
    
      <Profile />
      </div>
    );
  }
}

export default App;
