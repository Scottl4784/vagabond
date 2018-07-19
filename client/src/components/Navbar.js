import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  state = { 
  activeItem: 'Home',
  redirectToHome: false,
  redirectToCities: false,
  redirectToReviews: false,
  redirectToLogin: false
 }

  handleItemClick = (event, { name }) => {
    this.setState({ activeItem: name })
  }


  render() {
    const { activeItem } = this.state
   
    console.log(window.location.pathname)
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item as={Link} to="/" active link name='home' active={activeItem === 'home'} onClick={this.handleItemClick}  
          />   
          <Menu.Item
            name='Back' as={Link} to=".." active={activeItem === 'cities'} onClick={this.handleItemClick}
          />       
        </Menu>
      </div>
    )
  }
}

export default Navbar