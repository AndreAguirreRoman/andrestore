import React from 'react';
import { Link } from 'react-router-dom';



const ProductItem = props => {
    const { product_id, product_name, product_brand, product_price } = props.productItem;

    return (
        <div className='products-box'>

            <div className='products-box__main'>
                <Link className='products-box__main-item' to={`/product/${product_id}`}>
                    <div className='products-box__main-item-wrapper'>
                        <div className='products-box__main-item-wrapper__img'>
                            <img src='https://via.placeholder.com/191x188' />
                        </div>
                        <div className='products-box__main-item-wrapper__info'>
                            <div className='products-box__main-item-wrapper__info-brand'>{product_brand} {product_name}</div>
                            <div className='products-box__main-item-wrapper__info-price'>${product_price}</div>
                        </div>

                    </div>
                </Link >
            </div>

        </div >

    )
}

export default ProductItem;