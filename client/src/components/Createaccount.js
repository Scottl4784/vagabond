import React, { Component } from "react";
import { Grid, Form, Header, Image, Button } from "semantic-ui-react";
import axios from "axios";



const src1 ="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6b256ab85181b440dbd72eb4b1c297c&auto=format&fit=crop&w=934&q=80"

class Createaccount extends React.Component {
  constructor(){
    super();
  this.state = {
    name: "",
    email: "",
    password: "",
  };

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit (users) {
    users.preventDefault();
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
      // create user and store in database
      axios
      .post("/api/users", user)
      .then(res => {
        this.props.history.push("/");
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  onChange (users){
this.setState({
  [users.target.name]: users.target.value})
}
  
  render() {
    return (
      <div className="ui center aligned segment">
        <div>
          <Header as='h1' color='teal'>
            Create Profile
          </Header>
          <Image src={src1} size='medium' circular centered />
            <br />
            </div>
        <Grid> 
            <Grid.Row centered>
        <Form  onSubmit={this.onSubmit}>
          <Form.Group> 
            <Form.Input
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <Form.Input
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <Form.Input
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <Button content="Submit" />
          </Form.Group>
          
        </Form></Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Createaccount;
