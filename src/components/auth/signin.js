import React, { Component } from 'react';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';

class SignIn extends Component {

    onSubmit = (fields) => {
        console.log(fields)
    }
    render() {
        return (
            <div className='signin'>
                <div className='signin-box'>
                    <PageTitle className='signin-box__page-title' title='Login' />
                    <SignInForm onSubmit={this.onSubmit} className='signin-box__form' />
                </div>
            </div>
        )
    }
}



export default SignIn;