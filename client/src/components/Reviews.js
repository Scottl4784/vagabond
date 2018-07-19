
import React, { Component } from "react";
import axios from "axios";
import NewReviewForm from "./NewReviewForm";
import { Reveal, Header, Card, Button } from "semantic-ui-react";


class Reviews extends Component {
  state = {
    review: [],
    editReview: true
  }

  getReview = async () => {
    const cityId = this.props.match.params.cityId
    const reviewId = this.props.match.params.reviewId
    try {
      let review = await axios.get(`/api/cities/${cityId}/reviews/${reviewId}`)

      this.setState({
        review: review.data
      })
      console.log(this.state)
    } catch (err) {
      console.error(err)
    }
  }

  componentDidMount() {
    this.getReview()
  }
  render() {
          <div>
            <Card.Group centered>
              <Card>
                <Card.Content>
                  <Header as="h1" color="teal">
                    {review.title}
                  </Header>

                  <Card.Meta>
                    <Header as="h2" color="black">
                      {review.author}
                    </Header>
                  </Card.Meta>
                  <Card.Description>
                    <Header as="h4" color="black">
                      {review.comment}
                    </Header>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        this.deleteReview(review.id);
                      }}
                      basic
                      color="yellow"
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
        </div>
      );
    });
    }
    
    export default Reviews
