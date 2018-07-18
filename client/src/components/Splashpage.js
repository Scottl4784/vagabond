import React, { Component } from 'react';
import {Link} from 'react-router-dom'
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
          <Link to='/cities/1'><div className='atlanta'></div></Link>
          <Link to='/cities/4'><div className='sf'></div></Link>
          <Link to='/cities/2'><div className='chicago'></div></Link>
          <Link to='/cities/3'><div className='ny'></div></Link>
        </div>
      </div>
    );
  }
}

export default Splashpage;
