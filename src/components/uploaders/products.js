import React, { Component } from 'react';

import ProductForm from './productsForm';
import PageTitle from '../pageTitle';
import Footer from '../footer'




class Products extends Component {

    onSubmit = (fields) => {
        // console.log(fields)
    }
    render() {
        return (
            <div className='products'>
                <div className='products-box'>
                    <PageTitle className='products-box__page-title' title='Upload a new product' />
                    <ProductForm onSubmit={this.onSubmit} className='products__form' />
                    <Footer className='products-box__footer' />
                </div>

            </div>
        )
    }
}

export default Products;