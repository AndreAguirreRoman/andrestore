import React, { Component } from 'react';

import CartItems from './cartItems.js';

export function CartTitle({ className, title, subtitle }) {
    return (
        <div className={`${className} cart-title`}>
            <div className='cart-title__title'>{title}</div>
            <div className='cart-title__subtitle'>{subtitle}</div>
        </div>
    )
}



function CartFooter({ className, products }) {
    let count = products.length;
    let totalPrice = products.reduce((total, currentValue) => total = total + currentValue.product.product_price, 0);
    // let price = products.map(product => {
    //         return (
    //             product.product_price)
    //     });
    //     console.log("price", price)
    //     console.log("total price", totalPrice)

    console.log("cartfooter", products)
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
                <button className='cart-footer__checkout__bttn'>Checkout</button>
            </div>

        </div>
    )
}

export function CartProducts({ className, products, onClick }) {


    // console.log("cart-products", products)

    return (
        <div className='cart-items'>
            <div className={`${className} cart-items__products`}>
                <div className={`cart-items__products-item`} >
                    {
                        products.map(product => {
                            return (
                                <CartItems className='cart-items__products-map' onClick={onClick} name={product.product.product_name} subtitle={product.product.product_brand} price={product.product.product_price} key={Math.random()} />
                            )
                        })
                    }
                </div>


                <CartFooter className={'cart-items__footer'} products={products} />
            </div >

        </div >

    )
}

