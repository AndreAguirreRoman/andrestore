import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';


import AddressEditForm from './addressEditForm';
import history from '../../history';


class AddressEdit extends Component {
    onSubmit = (fields) => {
        this.props.editAddress(fields);
        history.push('/account')
    }
    render() {
        return (
            <div className='edit-address-form'>
                <AddressEditForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

AddressEdit = connect(mapStateToProps, actions)(AddressEdit)

export default AddressEdit;