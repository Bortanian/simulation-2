import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStepOne } from '../../ducks/reducer'

class StepOne extends Component {
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
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip
        })
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
    handleClick() {
        this.props.updateStepOne(
            this.state.name,
            this.state.address,
            this.state.city,
            this.state.state,
            this.state.zip
        )
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <p>Name:</p>
                <input value={this.state.name}
                    onChange={(e) => this.nameChange(e.target.value)} />
                <p>Address:</p>
                <input value={this.state.address}
                    onChange={(e) => this.addressChange(e.target.value)} />
                <p>City:</p>
                <input value={this.state.city}
                    onChange={(e) => this.cityChange(e.target.value)} />
                <p>State:</p>
                <input value={this.state.state}
                    onChange={(e) => this.stateChange(e.target.value)} />
                <p>Zipcode:</p>
                <input value={this.state.zip}
                    onChange={(e) => this.zipChange(e.target.value)} />
                <br />
                <Link to='/wizard/step2'>
                    <button onClick={() => this.handleClick()}>Next Step</button>
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
        zip: state.zip
    }
}

export default connect(mapStateToProps, {updateStepOne})(StepOne)