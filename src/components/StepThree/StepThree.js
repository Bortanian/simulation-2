import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStepThree } from '../../ducks/reducer'

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
        this.setState({
            mortgage: this.props.mortgage,
            rent: this.props.rent
        })
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
    handleClick() {
        this.props.updateStepThree(this.state.mortgage, this.state.rent)
    }
    render() {
        return (
            <div>
                <p>Recommended Rent:</p>
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

export default connect(mapStateToProps, {updateStepThree})(StepThree)