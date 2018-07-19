import React, { Component } from "react"
import axios from "axios"


class Reviews extends Component {
  state = {
    review: [],
    editReview: false
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
        {this.state.editReview ?
          <div>
            <input
              placeholder="Title"
              type="text"
              name="title"
              onChange={this.handleChange}
            />
            <input
              placeholder="Author"
              type="text"
              name="author"
              onChange={this.handleChange}
            />
            <textarea
              placeholder="Comment"
              type="text"
              name="comment"
              onChange={this.handleChange}
            />
          <button onClick={this.handleSubmit}>Edit Review</button>
          </div> 
          :
          <div>
          <h1>{this.state.review.title}</h1>
          <p>{this.state.review.author}</p>
          <p>{this.state.review.comment}</p>
          </div>
        }
          </div>
    )
      }
    }
    
    export default Reviews
