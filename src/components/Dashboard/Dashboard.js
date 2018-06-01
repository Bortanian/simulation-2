import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houseList: []
        }
    }
    componentDidMount(){
        axios.get('/api/houses').then(res => {
            console.log(res)
            this.setState({
                houseList: res.data
            })
        })
    }
    render() {
        let mappedList = this.state.houseList.map(house => {
            return (
                <House />
                // <div key={house.id}>
                //     <p>Property Name: {house.name}</p>
                //     <p>Address: {house.address}</p>
                //     <p>City: {house.city}</p>
                //     <p>State: {house.state}</p>
                //     <p>Zip: {house.zipCode}</p>
                // </div>
            )
        })
        return (
            <div>
                <p>I AM THE DASHBOARD COMPONENT</p>
                {mappedList}
                <Link to='/wizard'>
                    <button>Add New Property</button>
                </Link>
            </div>
        )
    }
}