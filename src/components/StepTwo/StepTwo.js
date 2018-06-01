import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStepTwo } from '../../ducks/reducer'

class StepTwo extends Component {
    constructor() {
        super();
        this.state = {
            image: ''
        }
        this.imageChange = this.imageChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        this.setState({
            image: this.props.image
        })
    }
    imageChange(val) {
        this.setState({
            image: val
        })
    }
    handleClick() {
        this.props.updateStepTwo(this.state.image)
    }
    render() {
        return (
            <div>
                <p>Image URL</p>
                <input value={this.state.image}
                    onChange={(e) => this.imageChange(e.target.value)} />
                <br />
                <Link to='/wizard/step1'>
                    <button onClick={() => this.handleClick()}>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                    <button onClick={() => this.handleClick()}>Next Step</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        image: state.image
    }
}

export default connect(mapStateToProps, {updateStepTwo})(StepTwo)