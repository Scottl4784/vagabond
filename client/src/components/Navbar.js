import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (event, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
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
      </div>
    )
  }
}

export default Navbar