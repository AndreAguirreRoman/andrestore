import React from 'react';

import history from '../../history';
import PageTitle from '../pageTitle';
export function OrderSummaryProducts({ className, products }) {
    // console.log("orderProducts", products)

    let subtotalPrice = products.reduce((total, currentValue) => total = total + currentValue.product.product_price, 0);
    let totalPrice = subtotalPrice;
    return (
        <div className={`order-summary-products ${className}`}>
            <div className='order-summary-products__item'>
                <PageTitle className={'order-summary-products__item-title'} title={'Order Summary'} />
                <div className='order-summary-products__item-product'>
                    {products.map(product => {
                        return (
                            <div className='order-summary-products__item-product-product' key={product.product.product_id}>
                                <div className='order-summary-products__item-product-product__image'>
                                    <img src='https:via.placeholder.com/50x50' />
                                </div>
                                <div className='order-summary-products__item-product-product__name'>{product.product.product_name}</div>
                                <div className='order-summary-products__item-product-product__description'>{product.product.product_brand}</div>
                                <div className='order-summary-products__item-product-product__price'>${product.product.product_price}</div>
                            </div>


                        )
                    })}</div>
                <div className='order-summary-products__item-total'>
                    <div className='order-summary-products__item-total__wrapper'>
                        <div className='order-summary-products__item-total__wrapper-sub'>
                            <div className='order-summary-products__item-total__wrapper-sub__subtotal'>
                                <div className='order-summary-products__item-total__wrapper-sub__subtotal-text'>Subtotal</div>
                                <div className='order-summary-products__item-total__wrapper-sub__subtotal-price'>${subtotalPrice}</div>

                            </div>
                            <div className='order-summary-products__item-total__wrapper-sub__shipping'>
                                <div className='order-summary-products__item-total__wrapper-sub__shipping-text'>Shipping</div>
                                <div className='order-summary-products__item-total__wrapper-sub__shipping-price'>FREE</div>
                            </div>
                        </div>
                        <div className='order-summary-products__item-total__wrapper-total'>
                            <div className='order-summary-products__item-total__wrapper-total__text'>TOTAL</div>
                            <div className='order-summary-products__item-total__wrapper-total__price'><div className='order-summary-products__item-total__wrapper-total__price-usd'>USD</div> ${totalPrice}</div>

                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}