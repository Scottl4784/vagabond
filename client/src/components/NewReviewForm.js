import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  Image,
  Header,
  Form,
  Input,

} from "semantic-ui-react";

class NewReviewForm extends Component {
  handleChange = event => {
    const inputName = event.target.name;
    const userInput = event.target.value;
    console.log(userInput);
    console.log(this.state);
    this.setState({
      [inputName]: userInput
    });
  };
  //pushes state into the DB
  handleSubmit = event => {
    event.preventDefault();
    const cityId = this.props.match.params.cityId;
    axios.post(`/api/cities/${cityId}/reviews`, this.state).then(res => {
      this.props.newReview(res.data);
      console.log(res.data);
      console.log(this.state);
    });
  };

  render() {

    return (
      <div>
       <Modal trigger={<Button color="teal">Add Review</Button>} corlor basic size='small' onClose={this.close}>
          <Modal.Header>Create Review</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size="medium"
              src="https://images.unsplash.com/photo-1505964862204-b1eff3cc4536?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=338529a2aa8034961dfda34b5970ed9f&auto=format&fit=crop&w=1351&q=80"
            />
            <Modal.Description>
              <Modal.Header>
                {" "}
                <p><em>We will love to hear your thoughts...</em></p>
              </Modal.Header> <br/>
              <Form >
                <Form.Group widths="equal">
                <Input 
                   placeholder="Title"
                   type="text"
                   name="title"
                   onChange={this.handleChange} />
                <Input 
                   placeholder="Author"
                   type="text"
                   name="author"
                   onChange={this.handleChange} />
                <Input 
                   placeholder="Comment"
                   type="text-area"
                   name="comment"
                   onChange={this.handleChange} />
                   </Form.Group> 
        <Modal.Actions>
            <Button color="black" onClick={this.close}>
              Cancel
            </Button>
          <Button
            color="teal" onClick=
            {this.handleSubmit}>
               Post
             </Button>
             </Modal.Actions>
              </Form>
            </Modal.Description>
          </Modal.Content>
        
        </Modal></div>
    );
  }
  
}


export default NewReviewForm;
