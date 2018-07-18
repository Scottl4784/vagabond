import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link, BrowserRouter as Router} from 'react-router-dom'

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (event, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Router>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Cities' active={activeItem === 'Cities'} onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='login' active={activeItem === 'login'} onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </Router>
    )
  }
}

export default Navbar