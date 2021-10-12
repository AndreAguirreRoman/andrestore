import React from 'react';
import { Link } from 'react-router-dom';



const ProductItem = props => {
    const { product_id, product_name, product_brand, product_price } = props.productItem;

    return (
        <div className='products-box'>

            <div className='products-box__main'>
                <Link className='products-box__main-item' to={`/product/${product_id}`}>
                    <div className='products-image'>
                        <img src='https://via.placeholder.com/191x188' />
                    </div>
                    <div className='products-brand'>{product_brand} {product_name}</div>
                    <div className='products-price'>${product_price}</div>
                </Link >
            </div>

        </div >

    )
}

export default ProductItem;