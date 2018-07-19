import React, { Component } from "react"
import axios from "axios"


class Reviews extends Component {
  state = {
    review: []
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
    const review = this.state.review.map((review) => {
      return (
        <div key={review.id}>
        <h1>{review.title}</h1>
        <p>{review.author}</p>
        <p>{review.comment}</p>
        </div>
      )
    })
    return (
      <div>
        {review}
        
      </div>
    )
  }
}

export default Reviews
