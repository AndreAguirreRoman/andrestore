import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import SearchBar from '../header/searchBar';


class Results extends Component {



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

        const navbarLinks = [
            {
                _id: 0,
                title: 'All',
                path: '/products',
                active: false,
            },
            {
                _id: 1,
                title: 'Phones',
                path: '/products/phones',
                active: false,
            },
            {
                _id: 2,
                title: 'Cameras',
                path: '/products/cameras',
                active: false,
            },
            {
                _id: 3,
                title: "TV's",
                path: '/products/tv',
                active: false,
            },
            {
                _id: 4,
                title: 'Computers',
                path: '/products/computers',
                active: false,
            },
            {
                _id: 5,
                title: 'Video Games',
                path: '/products/video-games',
                active: false,
            },
            {
                _id: 6,
                title: 'Headphones',
                path: '/products/headphones',
                active: false,
            },
        ]



        // this.props.getProducts();
        this.props.setHeaderLinks(headerLinks)
        this.props.setNavbarLinks(navbarLinks)
    }


    handleSearchSubmit(query) {
        console.log('hello nigga')
    }

    render() {
        return (
            <div className='results'>

                <SearchBar onSubmit={(query) => this.handleSearchSubmit(query)} />
                {/* {
                    this.props.products.map(product => {
                        return (
                            <div className='shop-product' key={product.product_id}>
                                <div className='shop-product__title'>
                                    {product.product_name}
                                </div>
                                <div className='shop-product__description'>
                                    {product.product_description}
                                </div>
                            </div>
                        )
                    })
                } */}
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

Results = connect(mapStateToProps, actions)(Results)

export default Results;