import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Splashpage from './components/Splashpage'
import Navbar from './components/Navbar'
import 'semantic-ui-css/semantic.min.css'
import Profile from "./components/Profile";
import Cities from './components/Cities';
import Reviews from './components/Reviews';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Navbar /> 
        <Switch>
          <Route exact path="/" component={Splashpage} />
          <Route exact path="/cities" component={Cities} />
          <Route exact path="/cities/:cityId/reviews" component={Reviews} />
          <Profile />
        </Switch>
      </div>

      </Router>
    );
  }
}

export default App;
