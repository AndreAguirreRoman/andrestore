import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

import { connect } from 'react-redux';



class ProductDesign extends Component {
    handleAddToCart = () => {
        this.props.addProduct(this.props.productItem)
        if (document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
        }
    }


    render() {
        const { product_id, product_name, product_brand, product_price } = this.props.productItem;
        const { className } = this.props;
        return (
            <div className={`${className} product-design-item`}>

                <div className='product-design-item__main'>
                    <Link className='product-design-item__main-item' to={`/product/${product_id}`}>
                        <div className='product-design-item__main-item-wrapper'>
                            <div className='product-design-item__main-item-wrapper__img'>
                                <img src='https://via.placeholder.com/191x188' />
                            </div>
                        </div>
                    </Link >
                    <div className='product-design-item__main-item-wrapper__info'>
                        <Link to={`/product/${product_id}`} className='product-design-item__main-item-wrapper__info-brand'>{product_brand} {product_name}</Link>
                        <Link to={`/product/${product_id}`} className='product-design-item__main-item-wrapper__info-price'>${product_price}</Link>
                        <div className='product-design-item__main-item-wrapper__info-cart' onClick={this.handleAddToCart}><i className="fas fa-cart-plus"></i></div>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const cart = state.user.cart;

    return {
        cart
    }
}

ProductDesign = connect(mapStateToProps, actions)(ProductDesign)

export default ProductDesign;