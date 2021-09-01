import React, { Component } from 'react';

import SignInForm from './signinForm';

class SignIn extends Component {
    render() {
        return (
            <div className='signin'>
                <SignInForm className='signin__form' />
            </div>
        )
    }
}



export default SignIn;