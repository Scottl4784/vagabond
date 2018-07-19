import React, { Component } from "react"
import axios from "axios"
import { Card } from 'semantic-ui-react'


class Reviews extends Component {
  state = {
    review: []
  }
  
  CardExampleGroupProps = (items) => <Card.Group items={items} />
  

  getReview = async () => {
    const cityId = this.props.match.params.cityId
    const reviewId = this.props.match.params.reviewId
    const items = [
      {
        header: this.state.review.title,
        description: "Hello!",
        meta: 'ROI: 30%',
      },
    ]
    const tt = this.CardExampleGroupProps(items)
    console.log('hi ',tt)
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
        {/* hello
       <h1>{this.state.review.title}</h1>
       <p>{this.state.review.author}</p>
       <p>{this.state.review.comment}</p>     */}
      <div>Hi {this.tt}</div>
      </div>
    )
  }
}

export default Reviews
