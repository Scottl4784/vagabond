import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
float: right;
display: flex;
flex-direction: column;
border-style: solid;
padding: 20px;
align-items: center;
height: 400px;
width: 200px;
margin: 20px;
background-color: #000000b8;
border: none;
color: white;
text-align: center;
<h3></h3> {
    margin: 0 0 15px 0;
}
input {
    text-align: center;
    width: 175px;
    height: 20px;
    margin: 5px 0;
    border: none;
}
textarea {
    margin: 20px 0;
    width: 175px;
    height: 250px;
    text-align: center;
    border: none;
    resize: none;
}
`

class NewReviewForm extends Component {
   
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
        axios.post(`/api/cities/${cityId}/reviews`, this.state).then((res) => {
            this.props.newReview(res.data)
            console.log(res.data)
            console.log(this.state)
        })
    }
    
    render() {
        return (
            <Container>
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
                    <button onClick={this.handleSubmit}>Post New Review</button>                
            </Container>
        );
    }
}

export default NewReviewForm;