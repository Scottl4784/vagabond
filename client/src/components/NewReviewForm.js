import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  Image,
  Header,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
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
  // modal for post
  state = { open: false };
  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button iconc="plus" color="green" onClick={this.show("blurring")}>
          Add Review
        </Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Create Review</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size="medium"
              src="https://images.unsplash.com/photo-1505964862204-b1eff3cc4536?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=338529a2aa8034961dfda34b5970ed9f&auto=format&fit=crop&w=1351&q=80"
            />
            <Modal.Description>
              <Header>
                {" "}
                <em>We will love to hear your thoughts...</em>
              </Header>
              <Form>
                <Form.Group widths="equal">
                  <Form.Field
                    id="form-input-control-title"
                    control={Input}
                    label="Title"
                    placeholder="Title"
                    onChange={this.handleChange}
                  />
                  <Form.Field
                    id="form-input-control-last-name"
                    control={Input}
                    label="Name"
                    placeholder="Name"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Field
                  id="form-textarea-control-comment"
                  control={Input}
                  label="Comment"
                  placeholder="Comment"
                  onChange={this.handleChange}
                />
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.close}>
              Cancel
            </Button>
            <Button
            color="teal" onClick={this.handleSubmit}>
               Post
             </Button>
          </Modal.Actions>
        </Modal>
      
      </div>
    );
  }
}

export default NewReviewForm;
