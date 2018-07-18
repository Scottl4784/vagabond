import React from 'react'
import { Card, Icon, Image, Button, Feed } from 'semantic-ui-react'

const src1 ="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=99c6d2880c20cb72f29b5a9eba8ea898&auto=format&fit=crop&w=1350&q=80"
const Profile = () => (
  <div>
      <Card centered>
    <Image src={src1} />
    <Card.Content>
      <Card.Header>Mike Jones</Card.Header>
      <Card.Meta >
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>World Traveler</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Posts
      </a>
    </Card.Content>
  </Card>
  <div>
  <Feed  >
    <Feed.Event
      icon='pencil'
      date='Today'
      summary="You posted on your friend Stevie Feliciano's wall."
    />

    <Feed.Event>
      <Feed.Label icon='pencil' />
      <Feed.Content date='Today' summary="You posted on your friend Stevie Feliciano's wall." />
    </Feed.Event>
  </Feed>
  </div>
  </div>
)

export default Profile