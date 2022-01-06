import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import axios from 'axios';

import { FormInput, LongGrayPassword, LongGrayButton } from '../formFields';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class AccountInformationFormPassword extends Component {

    constructor() {
        super()

        this.state = {
            showPasswords: false
        }
    }

    render() {

        const { className, handleSubmit, title } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} account-information-form__passwords`}>

                <div className='account-information-form__passwords'>
                    <div className='account-information-form__passwords__title'>{title}</div>

                    {this.state.showPasswords ?
                        <div className='account-information-form__passwords-wrapper'>
                            <div className='account-information-form-wrapper__passwords'>

                                <Field
                                    className='account-information-form-wrapper__passwords-current_psswrd'
                                    type='password'
                                    placeholder='Current Password'
                                    title='Current Password'
                                    name='current-password'
                                    component={FormInput}
                                />


                            </div>

                            <div className='account-information-form-wrapper__passwords'>

                                <Field className='account-information-form-wrapper__passwords-new_psswrd'
                                    type='password'
                                    placeholder='New Password'
                                    title='New Password'
                                    name='new-password'
                                    component={FormInput}
                                />

                                <Field className='account-information-form-wrapper__passwords-confirm_psswrd'
                                    type='password'
                                    placeholder='Confirm Password'
                                    title='Confirm Password'
                                    name='confirm-password'
                                    component={FormInput}
                                />
                                <div className='account-information-form-btns'> <Field className='account-information-form__passwords-cancel'
                                    type='button'
                                    placeholder='Cancel'
                                    name='cancel'
                                    onClick={() => this.setState({ showPasswords: false })}
                                    component={LongGrayPassword}
                                />
                                    <Field className='account-information-form__passwords-confirm'
                                        type='button'
                                        placeholder='Confirm'
                                        name='confirm'
                                        onClick={() => this.setState({ showPasswords: true })}
                                        component={LongGrayPassword}
                                    /></div>


                            </div>
                        </div>

                        :

                        <Field className='account-information-form__passwords-edit'
                            type='button'
                            placeholder='Change Password'
                            name='change-password'
                            onClick={() => this.setState({ showPasswords: true })}
                            component={LongGrayButton}
                        />
                    }
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