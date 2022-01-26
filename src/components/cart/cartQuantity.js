import React, { Component } from 'react';


class CartQuantity extends Component {

    render() {
        const { className, quantity } = this.props;
        return (
            <div className={`${className} cart-quantity`}>
                <div className='cart-quantity__plus'>
                    <i className="fas fa-plus-circle"></i>
                </div>
                <div className='cart-quantity__number'>
                    {1}
                </div>
                <div className='cart-quantity__minus'>
                    <i className="fas fa-minus-circle"></i>
                </div>
            </div>
        )
    }
}

export default CartQuantity;