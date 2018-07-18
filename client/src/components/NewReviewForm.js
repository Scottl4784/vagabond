import React, { Component } from 'react';
import axios from 'axios'

class NewReviewForm extends Component {
    state = {
        title: []
    }
    handleChange = (event) => {
        const inputName = event.target.name
        const userInput = event.target.value
        console.log(userInput)
        console.log(this.state)
        this.setState({
            [inputName]: userInput
        })
    }
    //pushes state into the DB
    handleSubmit = (event) => {
        event.preventDefault()
        const cityId = this.props.match.params.cityId
        axios.post(`/api/cities/${cityId}`, this.state).then((res) => {
            this.props.newReview(res.data)
            console.log(res.data)
            console.log(this.state)
        })
    }
    
    render() {
        return (
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
                    <input
                        placeholder="Comment"
                        type="text"
                        name="comment"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit}>Post New Review</button>                
            </div>
        );
    }
}

export default NewReviewForm;