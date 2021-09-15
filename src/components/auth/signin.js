import React, { Component } from 'react';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';
import Footer from '../footer'



class SignIn extends Component {

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



export default SignIn;