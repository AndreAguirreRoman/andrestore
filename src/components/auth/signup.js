import React, { Component } from 'react';

import SignUpForm from './signupForm';
import PageTitle from '../pageTitle';
import Footer from '../footer'

import { connect } from 'react-redux';
import * as actions from '../../actions';



class SignUp extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }
    render() {
        return (
            <div className='signup'>
                <div className='signup-box'>
                    <PageTitle className='signup-box__page-title' title='Create account' />
                    <SignUpForm onSubmit={this.onSubmit} className='signup__form' />
                    <Footer className='signup-box__footer' />
                </div>

            </div>
        )
    }
}


SignUp = connect(null, actions)(SignUp)
export default SignUp;