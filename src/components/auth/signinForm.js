import React, { Component } from 'react';

import { reduxForm } from 'redux-form';

class SignInForm extends Component {

    render() {
        const { className } = this.props;
        return (
            <div className={`${className} signin-form`}>
                Sign In
            </div>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignIn'
})(SignInForm)

export default SignInForm;