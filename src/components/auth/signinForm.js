import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import history from '../../history';

import Details from '../details';

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
                <div className='signin-form__info'>By continuing, you agree with Andre's Terms and Conditions</div>
                <Field className='signin-form__login' onClick={() => console.log('submits?')} type='submit' title='Login' name='login' component={FormButton} />
                <Details className='singin-form__details' title='Need help?' links={links} />
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm)

export default SignInForm;