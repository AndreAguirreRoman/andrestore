import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import history from '../../history';

import CreditCardForm from './creditCardForm';


class CreditCard extends Component {

    onSubmit = (fields) => {
        this.props.purchase(fields)
        history.push('/order/review/bill')
    }

    render() {
        const { className } = this.props;
        return (
            <div className={`${className} cc`}>
                <div className='cc-payment__title'>
                    <h1>Payment</h1>
                    <div className='cc-payment__title-icon'>
                        <i className="fab fa-cc-visa"></i>
                        <i className="fab fa-cc-mastercard"></i>
                        <i className="fab fa-cc-stripe"></i>
                        <i className="fab fa-cc-discover"></i>
                        <i className="fab fa-cc-amex"></i>
                    </div>
                </div>

                <CreditCardForm onSubmit={this.onSubmit} onClick={this.onClick} className='cc-payment__cc' />
            </div>
        )
    }
}

function mapStateToProps(state) {

    const card = state.user.creditCard;

    return { card }
}

CreditCard = connect(mapStateToProps, actions)(CreditCard)

export default CreditCard;