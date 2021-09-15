import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import history from '../../history';

import { FormInput, FormButton } from '../formFields';

class SignInForm extends Component {

    render() {
        const { onClick } = () => console.log('doneit')
        const links = [
            {
                _id: 0,
                title: 'Not registered? Create account',
                onClick: () => history.push('/signup')
            },
            {
                _id: 1,
                title: 'Forgot my email',
                onClick: () => console.log('sup boi')
            },
            {
                _id: 2,
                title: 'Forgot my password',
                onClick: () => console.log('sup boi')
            },
        ]

        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} signin-form`}>
                <Field className='signin-form__email' type='email' placeholder='Email' title='Email' name='email' component={FormInput} />
                <Field className='signin-form__password' type='password' placeholder='Password' title='Password' name='password' component={FormInput} />
                <div className='signin-form__info'>
                    <div className='signin-form__info-agreement'> By continuing, you agree with Andre's <a className='signin-form__info-agreement-link' onClick={() => console.log('working?')}>Terms and Conditions</a></div>
                    <div className='signin-form__info-password'><a className='signin-form__info-password-link' onClick={() => console.log('working?')}>Forgot your password?</a></div>
                </div>
                <Field className='signin-form__login' onClick={() => console.log('submits?')} type='submit' title='Login' name='login' component={FormButton} />
                <div className='signin-form__signup'>Not an user? <a className='signin-form__signup-link' onClick={() => history.push('/signup')}>Sign Up</a></div>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm)

export default SignInForm;