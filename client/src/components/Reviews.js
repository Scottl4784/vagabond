import React, { Component } from "react"
import axios from "axios"
import { Card } from 'semantic-ui-react'


class Reviews extends Component {
  state = {
    review: []
  }
  getReview = async () => {
    const cityId = this.props.match.params.cityId
    const reviewId = this.props.match.params.reviewId
    console.log(reviewId)
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
 
      <div className='card-div'>
      <Card centered raised color='teal'>
        <Card.Content header= {this.state.review.title}  />
        <Card.Content content= {this.state.review.comment}/>
        <Card.Content extra>
        {this.state.review.author}
        </Card.Content>
      </Card>
       </div>
      </div>

    )
  }
}

export default Reviews
