import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Dashboard.css'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houseList: []
        }
        this.getHouses = this.getHouses.bind(this)
        this.deleteHouse = this.deleteHouse.bind(this)
    }
    componentDidMount() {
        this.getHouses()
    }

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`)
        this.getHouses()
    }

    getHouses() {
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
            <div className='outer-div'>
                <div className='inner-div'>
                    <div className='dash-head'>
                        <h1 className='dash-title'>Dashboard</h1>
                        <Link to='/wizard/step1'>
                            <button className='add-prop'>Add New Property</button>
                        </Link>
                    </div>
                    {mappedList}
                </div>
            </div>
        )
    }
}