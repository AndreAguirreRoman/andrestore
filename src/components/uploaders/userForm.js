import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import history from '../../history';

import { FormInput, FormButton } from '../formFields';

class UserForm extends Component {

    render() {

        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} user-form`}>
                <Field className='user-form__street' type='adress street' placeholder='Adress street' title='Adress street' name='adress street' component={FormInput} />
                <Field className='user-form__number' type='number' placeholder='Number' title='Number' name='number' component={FormInput} />
                <Field className='user-form__city' type='city' placeholder='City' title='City' name='city' component={FormInput} />
                <Field className='user-form__state' type='state' placeholder='State' title='State' name='state' component={FormInput} />
                <Field className='user-form__receiver' type='receiver' placeholder='Receiver' title='Receiver' name='receiver' component={FormInput} />
            </form>
        )
    }
}


UserForm = reduxForm({
    form: 'UserForm'
})(UserForm)

export default UserForm;