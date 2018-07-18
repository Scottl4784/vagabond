import React, { Component } from 'react';
import axios from 'axios'
import NewReviewForm from './NewReviewForm';



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

    render() {
        const reviewsList = this.state.reviews.map((review) => {
            return (
                <div key={review.id}>
                    <h1>Review: {review.title}</h1>
                    <p>{review.author}</p>
                    <p> {review.comment}</p>
                </div>
            )
        })

        return (
            <div>
                <h1>{this.state.city.name}</h1>
                <img width={200} src={this.state.city.image} alt=""/>
                <NewReviewForm newReview={this.newReview} {...this.props}/>
                {reviewsList}
            </div>
        );
    }
}

export default Cities;