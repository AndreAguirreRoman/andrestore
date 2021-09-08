import React, { Component } from 'react';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';
import Bottom from '../bottom';


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
                </div>
                <Bottom />
            </div>
        )
    }
}



export default SignIn;