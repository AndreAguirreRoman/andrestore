import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import axios from 'axios';

import { FormInput, FormButton, AnotherButton, AddressInput } from '../formFields';

class AddressPageForm extends Component {


    render() {

        const { className, handleSubmit } = this.props;


        return (
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
                {/* <Field className='account-information-form__first-name' type='first-name' placeholder='First Name' title='First Name' name='first-name' component={FormInput} />
                <Field className='account-information-form__last-name' type='last-name' placeholder='Last Name' title='Last Name' name='last-name' component={FormInput} />
                <Field className='account-information-form__email' type='email' placeholder='Email' title='Email' name='email' component={FormInput} />
                <Field className='account-information-form__password' type='password' placeholder='Password' title='Password' name='password' component={FormInput} /> */}


                <Field className='address-page-form__street' type='street' value='hello' placeholder='Street Name' title='Street Name' name='street' component={FormInput} />
                <Field className='address-page-form__number' type='number' input={'4212312'} placeholder='Number' title='Number' name='number' component={AddressInput} />
                <Field className='address-page-form__city' type='city' placeholder='City' title='City' name='city' component={FormInput} />
                <Field className='address-page-form__state' type='state' placeholder='State' title='State' name='state' component={FormInput} />
                <Field className='address-page-form__zip' type='zip' placeholder='Zip Code' title='Zip Code' name='zip' component={FormInput} />
                <Field className='address-page-form__receiver' type='receiver' placeholder='Receives' title='Receives' name='receiver' component={FormInput} />

                <Field className='address-page-form__login' onClick={() => console.log('submits?')} type='submit' title='Login' name='login' component={AnotherButton} />
                <div className='address-page-form__address'>

                </div>
            </form>
        )
    }
}

AddressPageForm = reduxForm({
    form: 'AddressPageForm'
})(AddressPageForm)

export default AddressPageForm;