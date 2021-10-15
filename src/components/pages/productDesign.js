import React from 'react';
import { Link } from 'react-router-dom';



const ProductDesign = props => {
    const { product_id, product_name, product_brand, product_price } = props.productItem;
    const { className } = props;

    return (
        <div className={`${className} product-design-item`}>

            <div className='product-design-item__main'>
                <Link className='product-design-item__main-item' to={`/product/${product_id}`}>
                    <div className='product-design-item__main-item-wrapper'>
                        <div className='product-design-item__main-item-wrapper__img'>
                            <img src='https://via.placeholder.com/191x188' />
                        </div>
                        <div className='product-design-item__main-item-wrapper__info'>
                            <div className='product-design-item__main-item-wrapper__info-brand'>{product_brand} {product_name}</div>
                            <div className='product-design-item__main-item-wrapper__info-price'>${product_price}</div>
                        </div>

                    </div>
                </Link >
            </div>

        </div >

    )
}

export default ProductDesign;