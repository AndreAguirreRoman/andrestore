import React, { Component } from 'react';

import SignUpForm from './signupForm';
import PageTitle from '../pageTitle';
import Footer from '../footer'



class SignUp extends Component {

    onSubmit = (fields) => {
        console.log(fields)
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



export default SignUp;