import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import history from '../../history';
import { OrderSummaryProducts } from './orderSummaryProducts';

import Payment from './payment';


class OrderSummaryForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} order-form`}>
                <OrderSummaryProducts products={this.props.cart} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    const cart = state.user.cart;
    return { cart }
}

OrderSummaryForm = connect(mapStateToProps, actions)(OrderSummaryForm);

export default OrderSummaryForm;