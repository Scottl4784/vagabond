<<<<<<< HEAD
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Splashpage from './components/Splashpage'
import Navbar from './components/Navbar'
import 'semantic-ui-css/semantic.min.css'
=======
import React, { Component } from "react"
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Profile from "./components/Profile";
>>>>>>> group

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
      <Navbar /> 
      <Router>
        <Switch>
          <Route exact path="/" component={Splashpage} />
        </Switch>
      </Router>
=======
    
      <Profile />
>>>>>>> group
      </div>
    );
  }
}

export default App;
