import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

export default class Wizard extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleComplete = this.handleComplete.bind(this)
        this.nameChange = this.nameChange.bind(this)
        this.addressChange = this.addressChange.bind(this)
        this.cityChange = this.cityChange.bind(this)
        this.stateChange = this.stateChange.bind(this)
        this.zipChange = this.zipChange.bind(this)
    }
    handleComplete(){
        axios.post('/api/houses', {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        })
    }
    nameChange(val){
        this.setState({
            name: val
        })
    }
    addressChange(val){
        this.setState({
            address: val
        })
    }
    cityChange(val){
        this.setState({
            city: val
        })
    }
    stateChange(val){
        this.setState({
            state: val
        })
    }
    zipChange(val){
        this.setState({
            zip: val
        })
    }
    render(){
        return(
            <div>
                <p>I AM THE WIZARD COMPONENT</p>
                <p>Name:</p>
                <input onChange={(e) => this.nameChange(e.target.value)}/>
                <p>Address:</p>
                <input onChange={(e) => this.addressChange(e.target.value)}/>
                <p>City:</p>
                <input onChange={(e) => this.cityChange(e.target.value)}/>
                <p>State:</p>
                <input onChange={(e) => this.stateChange(e.target.value)}/>
                <p>Zipcode:</p>
                <input onChange={(e) => this.zipChange(e.target.value)}/>
                <br/>
                <Link to='/'>
                <button>Cancel</button>
                </Link>
                <Link to='/'>
                <button onClick={() => this.handleComplete()}>Complete</button>
                </Link>
            </div> 
        )
    }
}