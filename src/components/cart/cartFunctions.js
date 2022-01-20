import React, { Component } from 'react';

export function CartTitle({ className, title }) {
    return (
        <div className={`${className} cart-title`}>{title}</div>
    )
}

function CartFooter({ className, products }) {
    let count = products.length;
    let price = 89.08;
    return (
        <div className={`${className} cart-footer`}>
            <hr className='cart-footer__line' />
            <div className='cart-footer__subtotal'>
                <div className='cart-footer__subtotal-sub'>
                    <div className='cart-footer__subtotal-sub-subtotal'>Subtotal</div>
                    <div className='cart-footer__subtotal-sub-count'>{count} Items</div>
                </div>
                <div className='cart-footer__subtotal-price'>${price}</div>
            </div>


            <div className='cart-footer__checkout'>
                <button className='cart-footer__checkout__bttn'>Checkout</button>
            </div>

        </div>
    )
}

export function CartItems({ className, products }) {
    return (
        <div className='cart-items'>
            <div className={`${className} cart-items__products`}>
                <div className={`cart-items__products-item`}>
                    {products.map(product => {
                        return (
                            <h1 key={product}>{product}</h1>
                        )
                    })}
                </div>
                <CartFooter className={'cart-items__footer'} products={products} />

            </div >

        </div>

    )
}

