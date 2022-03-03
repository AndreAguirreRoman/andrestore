import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import axios from 'axios';
import Gallery from 'react-amazon-gallery';
import Footer from '../components/footer';
import ShopCart from '../components/cart/shopCart';


let images = [
    'https://via.placeholder.com/191x188',
    'https://via.placeholder.com/191x188',
    'https://via.placeholder.com/191x188',
    'https://via.placeholder.com/191x188'
]








class ProductDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productId: this.props.match.params.slug,
            productItem: {}
        }
    }

    getProductItem() {
        axios.get(
            `https://andreaguirre.herokuapp.com/product/${this.state.productId}`)
            .then(response => {
                this.setState({
                    productItem: response.data
                })
            })
            .catch(error => {
                console.log("error", error)
            })
    }

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




        this.props.setHeaderLinks(headerLinks)
        this.props.setNavbarLinks(navbarLinks)
        this.getProductItem();
    }

    handleAddToCart = () => {
        this.props.addProduct(this.state.productItem)
        if (document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
        }
    }


    render() {
        const { product_brand, product_name, product_description, product_price } = this.state.productItem;
        // console.log("currentId", this.state.productId)
        console.log("state", this.state.productItem)
        return (
            <div className='product-render'>
                <ShopCart className='product-render__shopcart' />
                <div className='product-render__wrapper'>


                    <div className='product-render__wrapper-gallery'>
                        <Gallery className={'product-render__wrapper-gallery-component'} images={images} />
                    </div>

                    <div className='product-render__wrapper-information'>
                        <h1 className='product-render__wrapper-information-brand'>{product_brand}</h1>
                        <h2 className='product-render__wrapper-information-name'>{product_name}</h2>

                        <p className='product-render__wrapper-information-description'>{product_description}</p>
                        <div className='product-render__wrapper-information-price'>
                            <p className='product'>Price: ${product_price}</p>
                            <p className='product'> Shipping: <b>FREE</b></p>
                        </div>
                        <button onClick={this.handleAddToCart} className='product-render__wrapper-information-cart'>Add to Cart</button>
                    </div>





                </div>
                <div className='product-render__footer'> <Footer className='product-render__footer-footer' /> </div>

            </div>
        )
    }
}


ProductDetail = connect(null, actions)(ProductDetail)

export default ProductDetail;
