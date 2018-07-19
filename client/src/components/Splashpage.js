import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/splashpage.css';

class Splashpage extends Component {
  render() {
    return (
      <div className="App">
        <div className='city-images'>
          {/* make this a slideshow of images */}
          <h1>Welcome to The World's Greatest Travel Review Site</h1>
          <h2>We all have a story to tell. </h2>
        </div>

        <h1> Select a city to share your experience </h1>
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
