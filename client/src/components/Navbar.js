import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link, BrowserRouter as Router} from 'react-router-dom'

class Navbar extends Component {
  state = { activeItem: 'Home', redirectToCities: false }

  handleItemClick = (event, { name }) => {
    this.setState({ activeItem: name })
  }
  takeMeToCitiesPage = () => {
    this.setState({redirectToCities: true})
  }

  render() {
    const { activeItem } = this.state
    if (this.state.redirectToCities) {
      return <Redirect to="/cities" />
    }
    console.log(window.location.pathname)
    return (
      <Router>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Cities' active={activeItem === 'Cities'} onClick={this.takeMeToCitiesPage}
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