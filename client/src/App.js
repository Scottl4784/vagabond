import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Splashpage from './components/Splashpage'
import Navbar from './components/Navbar'
import 'semantic-ui-css/semantic.min.css'
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar /> 
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Splashpage} /> */}
          <Profile />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
