import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions'

import axios from 'axios';
import ProductDesign from './productDesign';
import PageTitle from '../pageTitle';

class AllProducts extends Component {


    componentDidMount() {

        const headerLinks = [
            {
                _id: 0,
                title: <div className='header-icon'>
                    <div className='header-icon__icon'><i className="fas fa-user-circle" ></i></div>
                    <div className='header-icon__text'>Account & Information</div>
                </div>,
                active: false,
                path: '/account'
            },
            {
                _id: 1,
                title: 'Orders',
                active: true,
                path: '/orders'
            },
        ]



        this.props.getProducts();
        this.props.setHeaderLinks(headerLinks)
        this.props.fetchShopCategories()

        // this.props.setNavbarLinks(navbarLinks)
    }

    shouldComponentUpdate(nextProps) {
        if (this.props != nextProps) {
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id))
        }

        return true;

    }

    render() {

        const allProducts = this.props.products.map(productItem => {
            return (
                <ProductDesign key={productItem.product_id} className='all-products__wrapper-item design' productItem={productItem} />
            )
        })

        return (
            <div className='filter'>
                <PageTitle className={'filter__title'} title={'All products'} />
                <div className='all-products'>
                    {allProducts}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { products } = state.products
    const { categories } = state.shop;
    return { products, categories }
}

AllProducts = connect(mapStateToProps, actions)(AllProducts);

export default AllProducts;