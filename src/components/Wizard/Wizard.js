import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import {connect} from 'react-redux';
import {clearFields} from '../../ducks/reducer'

class Wizard extends Component{
    constructor(){
        super();
        this.state = {
            
        }
        this.handleClick = this.handleClick.bind(this)    
    }
    handleClick(){
        this.props.clearFields()
    }
    render(){
        return(
            <div>
                <p>I AM THE WIZARD COMPONENT</p>
                <br/>
                <Link to='/'>
                <button onClick={() => this.handleClick()}>Cancel</button>
                </Link> 
                <Route path='/wizard/step1' component={StepOne}/>
                <Route path='/wizard/step2' component={StepTwo}/>    
                <Route path='/wizard/step3' component={StepThree}/>
            </div> 
        )
    }
}
function mapStateToProps(state){
    return{state}
}
export default connect(mapStateToProps, {clearFields})(Wizard)