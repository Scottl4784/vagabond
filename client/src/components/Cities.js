import React, { Component } from "react";
import axios from "axios";
import { Grid, Image, Header, Card, Button } from "semantic-ui-react";

// Images
const src1 =
  "https://images.unsplash.com/photo-1504889100631-d557a48f0d30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e0bbe98f30034814a40c517f9d261b9&auto=format&fit=crop&w=638&q=80";
const src2 =
  "https://images.unsplash.com/photo-1494522996993-9194c5e6e3d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c833c76881d695311ada9e5b5813ef04&auto=format&fit=crop&w=634&q=80";
  const src3 ="";
  const src4 ="";

class Cities extends Component {
  state = {
    cities: []
  };

  getCities = () => {
    axios.get("/api/cities").then(res => {
      this.setState({ cities: res.data });
      console.log(res.data);
    });
  };
  componentDidMount() {
    this.getCities();
  }

  render() {
    const citiesList = this.state.cities.map(city => {
      return (
        <div key={city.id}>
          <h1>{city.name}</h1>
        </div>
      );
    });

    return (
      <div>
        {citiesList}
  <Card.Group centered>
    <Card>
      <Card.Content href='#'>
      <Header as='h1' color='teal'>
           Atlanta
          </Header>
        <Image size='large' src={src1} /> 
        <Card.Meta>Sample Text</Card.Meta>
        <Card.Description>
          The <strong>Big Peach</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Explore
          </Button>
          <Button basic color='yellow'>
            Review
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
    <Card.Content href='#'>
      <Header as='h1' color='teal'>
           Chicago
          </Header>
        <Image size='large' src={src2} /> 
        <Card.Meta>Windy City</Card.Meta>
        <Card.Description>
          The <strong>Big Peach</strong>
        </Card.Description>
      
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Explore
          </Button>
          <Button basic color='yellow'>
            Review
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
    <Card.Content href='#'>
      <Header as='h1' color='teal'>
           New York
          </Header>
        <Image size='large' src={src2} /> 
        <Card.Meta>Windy City</Card.Meta>
        <Card.Description>
          The <strong>Big Peach</strong>
        </Card.Description>
      
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Explore
          </Button>
          <Button basic color='yellow'>
            Review
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content href='#'>
      <Header as='h1' color='teal'>
           Atlanta
          </Header>
        <Image size='large' src={src1} /> 
        <Card.Meta>Sample Text</Card.Meta>
        <Card.Description>
          The <strong>Big Peach</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Explore
          </Button>
          <Button basic color='yellow'>
            Review
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
      </div>
    );
  }
}

export default Cities;
