import React, { Component } from 'react';
import axios from 'axios'
import NewReviewForm from './NewReviewForm';
import { Image, Header, Card, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom'



class Cities extends Component {
    state = {
        city: [],
        reviews: []
    }

    getCityAndReviews = async () => {
        const cityId = this.props.match.params.cityId
        try {
            let city = await axios.get(`/api/cities/${cityId}`)
            let reviews = await axios.get(`/api/cities/${cityId}/reviews`)

            this.setState({
                city: city.data,
                reviews: reviews.data
            })
            console.log(this.state)
        } catch (err) {
            console.error(err)
        }
    }
    componentDidMount() {
        this.getCityAndReviews()
    }

    newReview = (review) => {
        const newReview = [...this.state.reviews]
        newReview.push(review)
        this.setState({ reviews: newReview })
    }

    deleteReview = (reviewId) => {
        const cityId = this.props.match.params.cityId
        axios.delete(`/api/cities/${cityId}/reviews/${reviewId}`).then((res) => {
            console.log(res)
            this.setState({ reviews: res.data })
        })
    }

    render() {
        const reviewsList = this.state.reviews.map((review) => {
            const cityId = this.props.match.params.cityId
            return (
                <div key={review.id}>
                    <div>
                        <Card.Group centered>
                            <Card>
                                <Card.Content href="#">
                                    <Header as="h1" color="teal">
                                        <Link to={`/cities/${cityId}/reviews/${review.id}`}>{review.title}</Link>
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
                                        <Button onClick={() => { this.deleteReview(review.id) }} basic color="yellow">
                                            Delete
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>


                        </Card.Group>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <h1>{this.state.city.name}</h1>
                <img width={200} src={this.state.city.image} alt="" />
                <NewReviewForm newReview={this.newReview} {...this.props} />
                {reviewsList}
            </div>
        );
    }
}

export default Cities;
