import React, { Component } from 'react';


import CarouselPage from '../carousel/carousel';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import axios from 'axios';

import PaymentInformation from './paymentInformation';
import ProductItem from '../../products/productItem';
import Footer from '../footer';
import PageTitle from '../pageTitle';



class Home extends Component {
    constructor() {
        super();

        this.state = {
            productItems: []
        }

        this.getProducts = this.getProducts.bind(this);
    }

    getProducts() {
        axios.get("https://andreaguirre.herokuapp.com/products")
            .then(response => {
                this.setState({
                    productItems: [...response.data]
                })
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {

        const headerLinks = [
            {
                _id: 0,
                title: <div className='header-icon'> <div className='header-icon__icon'><i className="fas fa-user-circle" ></i></div> <div className='header-icon__text'>Account & Information </div> </div>,
                active: false,
                path: '/account'
            },
            {
                _id: 1,
                title: 'Orders',
                active: true,
                path: '/'
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




        this.getProducts();
        this.props.setHeaderLinks(headerLinks)
        this.props.setNavbarLinks(navbarLinks)
    }


    render() {

        const productsSmartphone = this.state.productItems.filter((productItem) => productItem.product_category_name.includes('Smartphone'))
            .map(productItem => {
                return (
                    <div className='products-items'>
                        <ProductItem key={productItem.product_id} productItem={productItem} />
                    </div>
                )
            })
        const productsCamera = this.state.productItems.filter((productItemCamera) => productItemCamera.product_category_name.includes('Smartcamera'))
            .map(productItemCamera => {
                return (
                    <div className='products-items'>
                        <ProductItem key={productItemCamera.product_id} productItem={productItemCamera} />
                    </div>
                )
            })
        const productsTv = this.state.productItems.filter((productItem) => productItem.product_category_name.includes('TV'))
            .map(productItem => {
                return (
                    <div className='products-items'>
                        <ProductItem key={productItem.product_id} productItem={productItem} />
                    </div>
                )
            })
        const productsComputer = this.state.productItems.filter((productItem) => productItem.product_category_name.includes('Computer'))
            .map(productItem => {
                return (
                    <div className='products-items'>
                        <ProductItem key={productItem.product_id} productItem={productItem} />
                    </div>
                )
            })
        const productsGames = this.state.productItems.filter((productItem) => productItem.product_category_name.includes('Video-Games'))
            .map(productItem => {
                return (
                    <div className='products-items'>
                        <ProductItem key={productItem.product_id} productItem={productItem} />
                    </div>
                )
            })
        const productsHeadphones = this.state.productItems.filter((productItem) => productItem.product_category_name.includes('Headphones'))
            .map(productItem => {
                return (
                    <div className='products-items'>
                        <ProductItem key={productItem.product_id} productItem={productItem} />
                    </div>
                )
            })

        return (
            <div className='home'>
                <div className='home__carousel'>
                    <CarouselPage className='home__carousel-module' />
                </div>
                <div className='home__products'>
                    <div className='home__products-payment'>
                        <PaymentInformation className='home__products-payment__info' />
                        <div className='home__products-main'>

                            <div className='home__products-main-wrapper'>
                                <PageTitle className='home__products-main-wrapper-title' title={"Phones"} />
                                <div className='home__products-main-wrapper-products'>
                                    {productsSmartphone}
                                </div>
                                <PageTitle className='home__products-main-wrapper-title' title={"Cameras"} />
                                <div className='home__products-main-wrapper-products'>
                                    {productsCamera}
                                </div>
                                <PageTitle className='home__products-main-wrapper-title' title={"TV's"} />
                                <div className='home__products-main-wrapper-products'>
                                    {productsTv}
                                </div>
                                <PageTitle className='home__products-main-wrapper-title' title={"Computers"} />
                                <div className='home__products-main-wrapper-products'>
                                    {productsComputer}
                                </div>
                                <PageTitle className='home__products-main-wrapper-title' title={"Video Games"} />
                                <div className='home__products-main-wrapper-products'>
                                    {productsGames}
                                </div>
                                <PageTitle className='home__products-main-wrapper-title' title={"Headphones"} />
                                <div className='home__products-main-wrapper-products'>
                                    {productsHeadphones}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer className='home__footer' />
            </div>
        )
    }
}

Home = connect(null, actions)(Home)
export default Home;