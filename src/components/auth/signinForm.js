import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../formFields';

class SignInForm extends Component {

    render() {
        const { className } = this.props;
        return (
            <div className={`${className} signin-form`}>
                <Field className='signin-form__email' type='email' placeholder='Email' title='Email' name='email' component={FormInput} />
                <Field className='signin-form__password' type='password' placeholder='Password' title='Password' name='password' component={FormInput} />
            </div>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm)

export default SignInForm;