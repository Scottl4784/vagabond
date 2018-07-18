import React, { Component } from 'react'
import axios from 'axios'
import NewReviewForm from './NewReviewForm';

class Reviews extends Component {
    state = {
        city: [],
        reviews: []
    }

    newReview = (review) => {
        const newReview = [...this.state.reviews]
        newReview.push(review)
        this.setState({ reviews: newReview })
    }

    getCityAndReviews = async () => {
        const cityId = this.props.match.params.cityId
        try {
            let cities = await axios.get(`/api/cities/${cityId}`)
            let reviews = await axios.get(`/api/cities/${cityId}/reviews`)

            this.setState({
                city: cities.data,
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
    render() {
        const reviewsList = this.state.reviews.map((review) => {
            return (
                <div key={review.id}>
                    <h1>{review.title}</h1>
                </div>
            )
        })
        return (
            <div>
                {reviewsList}
                <NewReviewForm newReview={this.newReview} {...this.props} />
            </div>
        );
    }
}

export default Reviews;