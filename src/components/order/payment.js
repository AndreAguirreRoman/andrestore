import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap';

import AddressSummary from './addressSummary';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import CreditCard from './creditCard';


class Payment extends Component {

    componentDidMount() {
        this.props.getAddress();
        this.props.fetchUserName();
    }

    render() {
        const { className } = this.props;
        const address = this.props.address.addresses
        const user = this.props.user
        // console.log("user", user)
        return (
            <div className={`${className} payment`}>
                <div className='payment__form'>
                    <AddressSummary className='payment__form-address' user={user} address={address} />
                    <CreditCard className='payment__form-cc' />
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const address = state.addresses
    const user = state.user.user
    return { address, user }
}

Payment = connect(mapStateToProps, actions)(Payment);

export default Payment;