import React, { Component } from 'react';

import AddressSummary from './addressSummary';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import CreditCard from './creditCard';
import Buttons from './buttons';


class Payment extends Component {

    render() {
        const { className } = this.props;
        return (
            <div className={`${className} payment`}>
                <div className='payment__form'>
                    <AddressSummary className='payment__form-address' />
                    <CreditCard className='payment__form-cc' />
                    <Buttons className='payment__form-buttons' />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

Payment = connect(mapStateToProps, actions)(Payment);

export default Payment;