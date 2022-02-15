import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';
import history from '../../history';

import PageTitle from '../pageTitle';


class Checkout extends Component {

    onClick = () => {
        history.push('/');
        this.props.deleteAllProducts()
    }

    render() {
        const creditCard = this.props.user.creditCard;
        var lastNumbers = creditCard.card.slice(-4);
        const products = this.props.user.cart
        let subtotalPrice = products.reduce((total, currentValue) => total = total + currentValue.product.product_price, 0);

        return (
            <div className='checkout'>
                <div className='checkout__wrapper'>
                    <div className='checkout__wrapper-title'>
                        <PageTitle title='THANK YOU!' className='checkout__wrapper-title-text' />
                    </div>
                    <div className='checkout__wrapper-content'>
                        <div className='checkout__wrapper-content__name'>
                            <i className="fas fa-user"></i>{creditCard.name}
                        </div>
                        <div className='checkout__wrapper-content__number'>
                            <i className="fas fa-credit-card"></i><p>  &#183;&#183;&#183;&#183; &#183;&#183;&#183;&#183; &#183;&#183;&#183;&#183; {lastNumbers}</p>
                        </div>
                        <div className='checkout__wrapper-content__delivery'><i class="fas fa-truck"></i> Expected arrival: 2-3 days</div>
                        <div className='checkout__wrapper-content__price'><i className="fas fa-dollar-sign"></i>Your total: ${subtotalPrice}</div>

                    </div>
                    <div className='checkout__wrapper-button'>
                        <button className='checkout__wrapper-button-btn' onClick={this.onClick}>Continue</button>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const user = state.user;
    console.log("user", user)
    return { user }
}

Checkout = connect(mapStateToProps, actions)(Checkout)

export default Checkout;