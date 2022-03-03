import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';


import NameEditForm from './nameEditForm';
import history from '../../history';

class NameEdit extends Component {

    onSubmit = (fields) => {
        this.props.editName(fields);
        history.push('/account');
    }
    render() {
        return (
            <div className='edit-name-form'>
                <NameEditForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return state
}

NameEdit = connect(mapStateToProps, actions)(NameEdit)

export default NameEdit;