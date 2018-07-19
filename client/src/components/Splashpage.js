import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../css/splashpage.css';
import axios from 'axios'

class Splashpage extends Component {
  state = {
    cities: []
  }

  getCities = () => {
    axios.get('/api/cities').then((res) => {
      this.setState({cities: res.data})
    })
    .catch((err) => {
      console.error(err)
    })
  }

  componentDidMount () {
    this.getCities()
  }

  render() {
    const citiesList = this.state.cities.map((city) => {
      return (
        <div key={city.id}>
        <Link to={`/cities/${city.id}`}> 
        <img src={city.image} alt="" className='atlanta'/>
        </Link>
        </div>
      )
    })
    return (
      <div className="App">
        <div className='city-images'>
          {/* make this a slideshow of images */}
          <h1>Welcome to The World's Greatest Travel Review Site</h1>
          <h2>We all have a story to tell. </h2>
        </div>

      
        <div className='city-pictures'>
          {citiesList}
        </div>
      </div>
    );
  }
}

export default Splashpage;
