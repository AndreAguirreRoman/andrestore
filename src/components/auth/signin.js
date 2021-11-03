import React, { Component } from 'react';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';
import Footer from '../footer'

import { connect } from 'react-redux';
import * as actions from '../../actions';



class SignIn extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields)

    }
    render() {
        return (
            <div className='signin'>
                <div className='signin-box'>
                    <PageTitle className='signin-box__page-title' title='Login' />
                    <SignInForm onSubmit={this.onSubmit} className='signin__form' />
                    <Footer className='signin-box__footer' />
                </div>

            </div>
        )
    }
}


SignIn = connect(null, actions)(SignIn)
export default SignIn;