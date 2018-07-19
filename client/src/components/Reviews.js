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
    return (
      <div>
       <h1>{this.state.review.title}</h1>
       <p>{this.state.review.author}</p>
       <p>{this.state.review.comment}</p>    
      </div>
    )
  }
}

export default Reviews
