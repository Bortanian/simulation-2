import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class StepThree extends Component {
    constructor() {
        super();
        this.state = {
            mortgage: 0,
            rent: 0
        }
        this.handleComplete = this.handleComplete.bind(this)
    }
    handleComplete() {
        axios.post('/api/houses', {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        })
    }
    mortgageChange(val) {
        this.setState({
            mortgage: val
        })
    }
    rentChange(val) {
        this.setState({
            rent: val
        })
    }
    render() {
        return (
            <div>
                <p>Recommended Rent:</p>
                <p>Monthly Mortgage Amount</p>
                <input onChange={(e) => this.mortgageChange(e.target.value)} />
                <p>Desired Monthly Rent</p>
                <input onChange={(e) => this.rentChange(e.target.value)} />
                <br />
                <Link to='/wizard/step2'>
                    <button>Previous Step</button>
                </Link>
                <Link to='/'>
                    <button onClick={() => this.handleComplete()}>Complete</button>
                </Link>
            </div>
        )
    }
}