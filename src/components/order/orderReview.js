import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';


import OrderSummaryForm from './orderSummaryForm';
import PageTitle from '../pageTitle';
import Payment from './payment';
import Footer from '../footer';


class Order extends Component {
    render() {
        // console.log(this.props.cart)

        return (
            <div className='order-summary'>
                <PageTitle className='order-summary__title' title='Order summary' />
                <div className='order-summary__info'>
                    <OrderSummaryForm className='order-summary__info-form' />
                    <Payment className='order-summary__info-payment' />
                </div>

                <Footer className='order-summary__footer' />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const cart = state.user.cart;
    return { cart }
}

Order = connect(mapStateToProps, actions)(Order);

export default Order;