import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import axios from 'axios';

import { FormInput, FormButton, LongGrayButton } from '../formFields';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class AccountInformationFormPassword extends Component {



    render() {

        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} account-information-form__passwords`}>

                <div className='account-information-form__passwords-'>

                    <Field className='account-information-form__passwords-edit'
                        type='button'
                        placeholder='Change Password'
                        title='Password'
                        name='change-password'
                        onClick={() => console.log('working?')}
                        component={LongGrayButton}
                    />

                    <div className='account-information-form__passwords'>

                        <Field
                            className='account-information-form__passwords-current_psswrd'
                            type='password'
                            placeholder='Current Password'
                            title='Current Password'
                            name='current-password'
                            component={FormInput}
                        />


                    </div>

                    <div className='account-information-form__passwords'>

                        <Field className='account-information-form__passwords-new_psswrd'
                            type='password'
                            placeholder='New Password'
                            title='New Password'
                            name='new-password'
                            component={FormInput}
                        />

                        <Field className='account-information-form__passwords-confirm_psswrd'
                            type='password'
                            placeholder='Confirm Password'
                            title='Confirm Password'
                            name='confirm-password'
                            component={FormInput}
                        />

                    </div>

                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { form: state.form }
}

AccountInformationFormPassword = connect(mapStateToProps, actions)(AccountInformationFormPassword)

AccountInformationFormPassword = reduxForm({
    form: 'AccountInformationFormPassword'
})(AccountInformationFormPassword)

export default AccountInformationFormPassword;