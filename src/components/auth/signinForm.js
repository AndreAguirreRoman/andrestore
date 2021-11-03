import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import history from '../../history';

import { FormInput, FormButton } from '../formFields';

class SignInForm extends Component {

    render() {

        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} signin-form`}>
                <Field className='signin-form__email' type='email' placeholder='Email' title='Email' name='email' component={FormInput} />
                <Field className='signin-form__password' type='password' placeholder='Password' title='Password' name='password' component={FormInput} />
                <div className='signin-form__info'>
                    <div className='signin-form__info-agreement'> By continuing, you agree with Andre's <a className='signin-form__info-agreement-link' onClick={() => console.log('working?')}>Terms and Conditions</a></div>
                    <div className='signin-form__info-password'><a className='signin-form__info-password-link' onClick={() => console.log('working?')}>Forgot your password?</a></div>
                </div>
                <Field className='signin-form__login' onClick={() => history.push('/')} type='submit' title='Login' name='login' component={FormButton} />
                <div className='signin-form__signup'>Not an user? <a className='signin-form__signup-link' onClick={() => history.push('/signup')}>Sign Up</a></div>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm)

export default SignInForm;


// import axios from "axios";
// import React, { Component } from "react";

// export default class SignInForm extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             email: "",
//             password: ""
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }

//     handleSubmit(event) {
//         axios.post
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <div>
//                 <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

//                 <form onSubmit={this.handleSubmit}>
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Your email"
//                         value={this.state.email}
//                         onChange={this.handleChange}
//                     />

//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Your password"
//                         value={this.state.password}
//                         onChange={this.handleChange}
//                     />

//                     <div>
//                         <button type="submit">Login</button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }