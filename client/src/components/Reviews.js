import React, { Component } from "react";
import axios from "axios";
import NewReviewForm from "./NewReviewForm";
import { Image, Header, Card, Button } from "semantic-ui-react";

class Reviews extends Component {
  state = {
    city: [],
    reviews: []
  };

  newReview = review => {
    const newReview = [...this.state.reviews];
    newReview.push(review);
    this.setState({ reviews: newReview });
  };

  getCityAndReviews = async () => {
    const cityId = this.props.match.params.cityId;
    try {
      let cities = await axios.get(`/api/cities/${cityId}`);
      let reviews = await axios.get(`/api/cities/${cityId}/reviews`);

      this.setState({
        city: cities.data,
        reviews: reviews.data
      });
      console.log(this.state);
    } catch (err) {
      console.error(err);
    }
  };
  componentDidMount() {
    this.getCityAndReviews();
  }
  render() {
    const reviewsList = this.state.reviews.map(review => {
      return (
        <div key={review.id}>
          <div>
            <Card.Group centered>
              <Card>
                <Card.Content href="#">
                  <Header as="h1" color="teal">
                    {review.title}
                  </Header>
                  <Image size="large" src="" />
                  <Card.Meta>{review.author}</Card.Meta>
                  <Card.Description>
                    <h1>{review.comment}</h1>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      Edit
                    </Button>
                    <Button basic color="yellow">
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
    return (
      <div>
        {reviewsList}
        <NewReviewForm newReview={this.newReview} {...this.props} />
      </div>
    );
  }
}

export default Reviews;
