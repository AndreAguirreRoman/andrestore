import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = props => {
    const { product_id, product_name, product_brand,
        product_category_name, product_subcategory_name, product_description } = props.productItem;

    return (
        <div className='products-box'>

            <div className='products-box__main'>
                <Link to={`/product/${product_id}`}>
                    <div className='products-image'>
                        <img src='https://via.placeholder.com/191x188' />
                    </div>
                    <div className='products-brand'>{product_brand}</div>
                    <div className='products-title'>{product_name}</div>
                    <div className='products-description'>{product_description}</div>
                </Link >
            </div>

        </div >

    )
}

export default ProductItem;