import React, { Component } from 'react';
import axios from 'axios'



class Cities extends Component {
    state = {
        cities: []
    }

    getCities = () => {
        axios.get('/api/cities').then((res) => {
            this.setState({cities: res.data})
            console.log(res.data)
        })
    }
    componentDidMount() {
        this.getCities()
    }

    render() {
        const citiesList = this.state.cities.map((city) => {
            return (
                <div key={city.id}>
                    <h1>{city.name}</h1>
                </div>
            )
        })

        return (
            <div>
                {citiesList}
            </div>
        );
    }
}

export default Cities;