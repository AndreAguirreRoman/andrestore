import React, { Component } from 'react';

class CartPrice extends Component {
    render() {
        const { className, price, onClick } = this.props;
        return (
            <div className={`${className} cart-price`}>
                <div className='cart-price__price'>{price}</div>
                <a className='cart-price__remove' onClick={onClick}>Remove</a>
            </div>
        );
    }
}

export default CartPrice;