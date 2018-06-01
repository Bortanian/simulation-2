import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStepThree, clearFields } from '../../ducks/reducer'

class StepThree extends Component {
    constructor() {
        super();
        this.state = {
            mortgage: 0,
            rent: 0
        }
        this.handleComplete = this.handleComplete.bind(this)
        this.mortgageChange = this.mortgageChange.bind(this)
        this.rentChange = this.rentChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        console.log(this.props.match)
        this.setState({
            mortgage: this.props.mortgage,
            rent: this.props.rent
        })
    }
    handleComplete() {
        axios.post('/api/houses', {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            image: this.props.image,
            mortgage: this.state.mortgage,
            rent: this.state.rent
        })
        this.props.clearFields()
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
    handleClick() {
        this.props.updateStepThree(this.state.mortgage, this.state.rent)
        
    }
    render() {
        return (
            <div>
                <p>Recommended Rent: {this.state.mortgage * 1.25}</p>
                <p>Monthly Mortgage Amount</p>
                <input value={this.state.mortgage}
                    onChange={(e) => this.mortgageChange(e.target.value)} />
                <p>Desired Monthly Rent</p>
                <input value={this.state.rent}
                    onChange={(e) => this.rentChange(e.target.value)} />
                <br />
                <Link to='/wizard/step2'>
                    <button onClick={() => this.handleClick()}>Previous Step</button>
                </Link>
                <Link to='/'>
                    <button onClick={() => this.handleComplete()}>Complete</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        image: state.image,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStateToProps, {updateStepThree, clearFields})(StepThree)