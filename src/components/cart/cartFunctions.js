import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import CartItems from './cartItems.js';
import history from '../../history';

export function CartTitle({ className, title, onClick }) {


    return (
        <div className={`${className} cart-title`}>
            <div>
                <div className='cart-title__title'>{title}</div>
            </div>

            <a className='cart-title__delete' onClick={onClick}>
                Delete All
            </a>

        </div>
    )
}
export function CartTitleProducts({ className, title, subtitle }) {


    return (
        <div className={`${className} cart-title__products`}>
            <div>
                <div className='cart-title__products__title'>{title}</div>
                <div className='cart-title__products__subtitle'>{subtitle}</div>
            </div>
        </div>
    )
}



function CartFooter({ className, products }) {
    let count = products.length;
    let totalPrice = products.reduce((total, currentValue) => total = total + currentValue.product.product_price, 0);

    return (
        <div className={`${className} cart-footer`}>
            <hr className='cart-footer__line' />
            <div className='cart-footer__subtotal'>
                <div className='cart-footer__subtotal-sub'>
                    <div className='cart-footer__subtotal-sub-subtotal'>Subtotal</div>
                    <div className='cart-footer__subtotal-sub-count'>{count} Items</div>
                </div>
                <div className='cart-footer__subtotal-price'>${totalPrice}</div>
            </div>


            <div className='cart-footer__checkout'>
                <button className='cart-footer__checkout__bttn' onClick={() => history.push('/order/review')}>Checkout</button>
            </div>
        </div>
    )
}

class CartProducts extends Component {

    render() {
        const { className } = this.props;

        const products = this.props.cart

        return (
            <div className='cart-items'>
                <div className={`${className} cart-items__products`}>
                    <div className={`cart-items__products-item`} >
                        {
                            products.map(product => {
                                return (
                                    <CartItems className='cart-items__products-map' onClick={() => { this.props.deleteProduct(product._id) }} name={product.product.product_name} subtitle={product.product.product_brand} price={product.product.product_price} key={Math.random()} />
                                )
                            })
                        }
                    </div>


                    <CartFooter className={'cart-items__footer'} products={products} />
                </div >

            </div >

        )
    }

}
function mapStateToProps(state) {
    const cart = state.user.cart;

    return { cart }
}

CartProducts = connect(mapStateToProps, actions)(CartProducts);

export default CartProducts;