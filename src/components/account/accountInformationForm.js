import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import axios from 'axios';

import { FormInput, FormButton } from '../formFields';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class AccountInformationForm extends Component {



    render() {

        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
                <Field className='account-information-form__first-name' type='first-name' placeholder='First Name' title='First Name' name='first-name' component={FormInput} />
                <Field className='account-information-form__last-name' type='last-name' placeholder='Last Name' title='Last Name' name='last-name' component={FormInput} />

                <Field className='account-information-form__street' type='street' placeholder='Street Name' title='Street Name' name='street' component={FormInput} />
                <Field className='account-information-form__number' type='number' placeholder='Number' title='Number' name='number' component={FormInput} />
                <Field className='account-information-form__city' type='city' placeholder='City' title='City' name='city' component={FormInput} />
                <Field className='account-information-form__state' type='state' placeholder='State' title='State' name='state' component={FormInput} />
                <Field className='account-information-form__zip' type='zip' placeholder='Zip Code' title='Zip Code' name='zip' component={FormInput} />
                <Field className='account-information-form__receiver' type='receiver' placeholder='Receives' title='Receives' name='receiver' component={FormInput} />

                <Field className='account-information-form__login' onClick={() => console.log('submits?')} type='submit' title='Update' name='login' component={FormButton} />
                <div className='account-information-form__address'>

                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { form: state.form }
}

AccountInformationForm = connect(mapStateToProps, actions)(AccountInformationForm)

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm)

export default AccountInformationForm;