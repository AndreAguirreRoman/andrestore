import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import history from '../../history';

import { FormInput, FormButton } from '../formFields';

class SignUpForm extends Component {

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
            <form onSubmit={handleSubmit} className={`${className} signup-form`}>
                <Field className='signup-form__email' type='email' placeholder='Email' title='Email' name='email' component={FormInput} />
                <Field className='signup-form__password' type='password' placeholder='Password' title='Password' name='password' component={FormInput} />
                <div className='signup-form__rules'><i className='signup-form__rules-icon' class="fas fa-info"></i> Passwords must be at least 6 characters long</div>
                <Field className='signup-form__confirm' type='password' placeholder='Confirm Password' title='Confirm Password' name='password' component={FormInput} />
                <div className='signup-form__info'>
                    <div className='signup-form__info-agreement'> By continuing, you agree with Andre's <a className='signup-form__info-agreement-link' onClick={() => console.log('working?')}>Terms and Conditions</a></div>
                    <div className='signup-form__info-password'><a className='signup-form__info-password-link' onClick={() => console.log('working?')}>Forgot your password?</a></div>
                </div>
                <Field className='signup-form__create' onClick={() => console.log('submits?')} type='submit' title='Create Account' name='create' component={FormButton} />
                <div className='signup-form__signin'>Already an user? <a className='signup-form__signin-link' onClick={() => history.push('/signin')}>Sign In</a></div>
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm)

export default SignUpForm;