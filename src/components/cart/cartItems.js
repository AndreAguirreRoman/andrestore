import React, { Component } from 'react';

import { CartTitleProducts } from './cartFunctions';
import CartPrice from './cartPrice';

class CartItems extends Component {
    render() {

        const { onClick, products, price, name, subtitle, className } = this.props;
        return (
            <div className={`${className} cart-item`}>
                <img className='cart-item__image' src='https:via.placeholder.com/100x100' />
                {products}
                <CartTitleProducts className='cart-item__products__title' subtitle={subtitle} title={name} />
                <CartPrice className='cart-item__price' onClick={onClick} price={`$${price}`} />
            </div>
        );
    }
}

export default CartItems;