import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class StepTwo extends Component {
    constructor() {
        super();
        this.state = {
            image: ''
        }
        this.imageChange = this.imageChange.bind(this)
    }
    imageChange(val) {
        this.setState({
            image: val
        })
    }
    render() {
        return (
            <div>
                <p>Image URL</p>
                <input onChange={(e) => this.imageChange(e.target.value)} />
                <br />
                <Link to='/wizard/step1'>
                    <button>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                    <button>Next Step</button>
                </Link>
            </div>
        )
    }
}