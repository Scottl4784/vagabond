import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (event, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
          <Menu.Item as={Link} to='/cities' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          </Link>
          <Link to='/cities'>
          <Menu.Item
            name='Cities' active={activeItem === 'Cities'} onClick={this.handleItemClick}
          />
          </Link>
          <Menu.Item
            name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='login' active={activeItem === 'login'} onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Navbar