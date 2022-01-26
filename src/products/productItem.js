import React from 'react';
import { Link } from 'react-router-dom';




const ProductItem = props => {
    const { product_id, product_name, product_brand, product_price } = props.productItem;
    const { onClick } = props;


    return (
        <div className='products-box'>

            <div className='products-box__main'>
                <Link className='products-box__main-item' to={`/product/${product_id}`}>
                    <div className='products-box__main-item-wrapper'>
                        <div className='products-box__main-item-wrapper__img'>
                            <img src='https://via.placeholder.com/191x188' />
                        </div>
                    </div>
                </Link >
                <div className='products-box__main-item-wrapper__info'>

                    <Link to={`/product/${product_id}`} className='products-box__main-item-wrapper__info-link-brand'>{product_brand} {product_name}</Link>
                    <Link to={`/product/${product_id}`} className='products-box__main-item-wrapper__info-link-price'>${product_price}</Link>

                    <div onClick={onClick} className='products-box__main-item-wrapper__info-cart'>
                        <i className="fas fa-cart-plus"></i>
                    </div>
                </div>

            </div>

        </div>



    )
}

export default ProductItem;