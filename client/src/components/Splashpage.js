import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/splashpage.css';

class Splashpage extends Component {
  render() {
    return (
      <div className="App">
        <div className='city-images'>
          
        </div>
        <h1 className='splash-title'>Welcome to The World's Greatest Travel Review Site</h1>
        <h2 className='splash-subtitle'>We all have a story to tell. </h2>

        <div className='city-pictures'>
          <div className='atlanta'></div>
          <div className='sf'></div>
          <div className='chicago'></div>
          <div className='ny'></div>
        </div>
      </div>
    );
  }
}

export default Splashpage;
