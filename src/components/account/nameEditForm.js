import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import axios from 'axios';

import { FormInput, FormButton, FormInputTest } from '../formFields';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class NameEditForm extends Component {


    componentDidMount() {
        this.props.fetchUserName();
    }

    render() {
        const { className, handleSubmit, onSubmit, valid } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} edit-name-form`}>
                <Field className='edit-name-form__first-name' type='firstName' placeholder='First Name' title='First Name' name='user_first_name' component={FormInput} />
                <Field className='edit-name-form__last-name' type='lastName' placeholder='Last Name' title='Last Name' name='user_last_name' component={FormInput} />

                <button onClick={() => console.log('working?')}>UPDATE</button>
            </form>
        )
    }
}





function mapStateToProps(state) {
    return {
        initialValues: state.user.user
    }

}

NameEditForm = reduxForm({
    form: 'NameEditForm',
    enableReinitialize: true

})(NameEditForm)

NameEditForm = connect(mapStateToProps, actions)(NameEditForm)



export default NameEditForm;