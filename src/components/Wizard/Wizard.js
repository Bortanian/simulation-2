import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Wizard extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipCode: 0
        }
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
            zipCode: val
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
            </div> 
        )
    }
}