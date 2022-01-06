import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import history from '../../history';

import { FormInput, FormButton } from '../formFields';

class SignUpForm extends Component {

    constructor(props) {
        super(props);


    }


    render() {

        let state = false;
        function showHide() {


            if (state) {
                document.getElementById("password").setAttribute("type", "password");
                state = false
            } else {
                document.getElementById("password").setAttribute("type", "text");
                state = true
            }
        }

        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} signup-form`}>
                <div className='signup-form__names'>
                    <Field className='signup-form__names-first' type='first name' placeholder='First Name' title='First Name' name='first name' component={FormInput} />
                    <Field className='signup-form__names-last' type='last name' placeholder='Last Name' title='Last Name' name='last name' component={FormInput} />
                </div>
                <Field className='signup-form__email' type='email' placeholder='Email' title='Email' name='email' component={FormInput} />
                <div className='signup-form__password'>
                    <Field id='password' className='signup-form__password-field' id='password' type='password' placeholder='Password' title='Password' name='password' component={FormInput} />
                    <i id='eye' onClick={showHide} className="signup-form__password-icon fas fa-eye"></i>
                </div>



                <div className='signup-form__rules'>
                    <i className="fas fa-info-circle"></i>
                    <div className='signup-form__rules-text'>Passwords must be at least 6 characters long.</div>
                </div>
                <div className='signup-form__info'>
                    <div className='signup-form__info-agreement'> By continuing, you agree with Andre's <a className='signup-form__info-agreement-link' onClick={() => console.log('working?')}>Terms and Conditions</a></div>
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