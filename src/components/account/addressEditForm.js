import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';


import { FormInput, FormButton, FormInputTest } from '../formFields';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import history from '../../history';


class AddressEditForm extends Component {

    componentDidMount() {
        this.props.fetchAddressToEdit();
    }




    render() {
        const { className, handleSubmit, onSubmit, valid } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} edit-address-form`}>
                {/* <Field className='edit-address-form__first-name' type='firstName' placeholder='First Name' title='First Name' name='firstname' component={FormInput} validate={required} />
                <Field className='edit-address-form__last-name' type='lastName' placeholder='Last Name' title='Last Name' name='lastName' component={FormInput} /> */}

                <Field className='edit-address-form__street' type='street' placeholder='Street Name' title='Street Name' name='address_street' component={FormInput} />
                <Field className='edit-address-form__number' type='number' placeholder='Number' title='Number' name='address_number' component={FormInput} />
                <Field className='edit-address-form__city' type='city' placeholder='City' title='City' name='address_city' component={FormInput} />
                <Field className='edit-address-form__state' type='state' placeholder='State' title='State' name='address_state' component={FormInput} />
                <Field className='edit-address-form__zip' type='zip' placeholder='Zip Code' title='Zip Code' name='address_zip' component={FormInput} />
                <Field className='edit-address-form__receiver' type='receiver' placeholder='Receives' title='Receives' name='address_receiver' component={FormInput} />
                <div className='edit-address-form__buttons'>
                    <button className='update'>UPDATE</button>
                    <button type='button' onClick={() => history.push('/account/address')} className='back'>BACK</button>
                </div>

            </form>
        )
    }
}





function mapStateToProps(state) {
    return {
        initialValues: state.user.addressEdit
    }

}

AddressEditForm = reduxForm({
    form: 'AddressEditForm',
    enableReinitialize: true

})(AddressEditForm)

AddressEditForm = connect(mapStateToProps, actions)(AddressEditForm)



export default AddressEditForm;