import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';


class ProductsNew extends Component {


    componentDidMount() {
        this.props.getProducts();
    }


    render() {
        return (
            <div className=''>
                {
                    this.props.products.map(product => {
                        return (
                            <div className='shop-product'>
                                <div className='shop-product__title'>
                                    {product.product_name}
                                </div>
                                <div className='shop-product__description'>
                                    {product.product_description}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { products } = state.products
    return {
        products
    }
}

ProductsNew = connect(mapStateToProps, actions)(ProductsNew)

export default ProductsNew;