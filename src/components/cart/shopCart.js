import React, { Component } from 'react'
import { CartItems, CartTitle } from './cartFunctions'


class ShopCart extends Component {
    render() {
        return (
            <div className='cart'>
                <div className='cart__icon'>
                    <i className='fas fa-times-circle' />
                </div>

                <div className='cart__container'>
                    <CartTitle title={'Shopping Cart'} className={'cart__container-title'} />
                    <CartItems className={'cart__container-items'} products={[1, 2, 3, 4, 5]} />
                </div>

            </div>
        )
    }
}

export default ShopCart;