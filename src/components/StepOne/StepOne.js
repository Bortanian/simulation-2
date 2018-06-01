import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class StepOne extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.nameChange = this.nameChange.bind(this)
        this.addressChange = this.addressChange.bind(this)
        this.cityChange = this.cityChange.bind(this)
        this.stateChange = this.stateChange.bind(this)
        this.zipChange = this.zipChange.bind(this)
    }
    nameChange(val) {
        this.setState({
            name: val
        })
    }
    addressChange(val) {
        this.setState({
            address: val
        })
    }
    cityChange(val) {
        this.setState({
            city: val
        })
    }
    stateChange(val) {
        this.setState({
            state: val
        })
    }
    zipChange(val) {
        this.setState({
            zip: val
        })
    }
    render() {
        return (
            <div>
                <p>Name:</p>
                <input onChange={(e) => this.nameChange(e.target.value)} />
                <p>Address:</p>
                <input onChange={(e) => this.addressChange(e.target.value)} />
                <p>City:</p>
                <input onChange={(e) => this.cityChange(e.target.value)} />
                <p>State:</p>
                <input onChange={(e) => this.stateChange(e.target.value)} />
                <p>Zipcode:</p>
                <input onChange={(e) => this.zipChange(e.target.value)} />
                <br/>
                <Link to='/wizard/step2'>
                <button>Next Step</button>
                </Link>
            </div>
        )
    }
}