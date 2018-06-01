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
        this.getHouses = this.getHouses.bind(this)
        this.deleteHouse = this.deleteHouse.bind(this)
    }
    componentDidMount(){
        this.getHouses()
    }

    deleteHouse(id){
        axios.delete(`/api/houses/${id}`)
        this.getHouses()
    }

    getHouses(){
        axios.get('/api/houses').then(res => {
            this.setState({
                houseList: res.data
            })
        })
    }
    render() {
        let mappedList = this.state.houseList.map(house => {
            return (
                <House
                key={house.houseid}
                id={house.houseid}
                name={house.name}
                address={house.address}
                city={house.city}
                state={house.state}
                zip={house.zip}
                image={house.image}
                mortgage={house.mortgage}
                rent={house.rent}
                delete={this.deleteHouse}
                />
            )
        })
        return (
            <div>
                <p>I AM THE DASHBOARD COMPONENT</p>
                {mappedList}
                <Link to='/wizard/step1'>
                    <button>Add New Property</button>
                </Link>
            </div>
        )
    }
}