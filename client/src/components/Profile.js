import React, { Component } from "react";
import { Grid, Form, Header, Image, Button } from "semantic-ui-react";


const src1 ="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6b256ab85181b440dbd72eb4b1c297c&auto=format&fit=crop&w=934&q=80"

class Profile extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    submittedName: "",
    submittedEmail: "",
    submittedPassword: ""
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { name, email, password } = this.state;

    this.setState({
      submittedName: name,
      submittedEmail: email,
      submittedPassword: password
    });
  };

  render() {
    const {
      name,
      email,
      password,
      submittedName,
      submittedEmail,
      submittedPassword
    } = this.state;

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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleChange}
            /> 
            <Form.Input
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
            <Button content="Submit" />
          </Form.Group>
          
        </Form></Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Profile;
