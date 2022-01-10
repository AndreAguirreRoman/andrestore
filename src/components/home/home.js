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
    // constructor() {
    //     super();

    //     this.state = {
    //         productItems: []
    //     }

    //     this.getProducts = this.getProducts.bind(this);
    // }

    // getProducts() {
    //     axios.get("https://andreaguirre.herokuapp.com/products")
    //         .then(response => {
    //             this.setState({
    //                 productItems: [...response.data]
    //             })
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

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




        this.props.getProducts();
        this.props.setHeaderLinks(headerLinks)
        this.props.setNavbarLinks(navbarLinks)
    }


    render() {

        const productsItems = this.props.productItems;

        const productsSmartphone = productsItems.products.filter((productItem) => productItem.product_category_name.includes('Smartphone'))
            .map(productItem => {
                return (
                    <div className='products-items' key={productItem.product_id}>
                        <ProductItem productItem={productItem} />
                    </div>
                )
            })
        const productsCamera = productsItems.products.filter((productItem) => productItem.product_category_name.includes('Smartcamera'))
            .map(productItem => {
                return (
                    <div className='products-items' key={productItem.product_id}>
                        <ProductItem productItem={productItem} />
                    </div>
                )
            })
        const productsTv = productsItems.products.filter((productItem) => productItem.product_category_name.includes('TV'))
            .map(productItem => {
                return (
                    <div className='products-items' key={productItem.product_id}>
                        <ProductItem productItem={productItem} />
                    </div>
                )
            })
        const productsComputer = productsItems.products.filter((productItem) => productItem.product_category_name.includes('Computer'))
            .map(productItem => {
                return (
                    <div className='products-items' key={productItem.product_id}>
                        <ProductItem productItem={productItem} />
                    </div>
                )
            })
        const productsGames = productsItems.products.filter((productItem) => productItem.product_category_name.includes('Video-Games'))
            .map(productItem => {
                return (
                    <div className='products-items' key={productItem.product_id}>
                        <ProductItem productItem={productItem} />
                    </div>
                )
            })
        const productsHeadphones = productsItems.products.filter((productItem) => productItem.product_category_name.includes('Headphones'))
            .map(productItem => {
                return (
                    <div className='products-items' key={productItem.product_id}>
                        <ProductItem productItem={productItem} onClick={() => console.log(productItem.product_id)} />
                    </div>
                )
            })

        console.log(this.state);
        console.log("For debug", productsItems.products)
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
            </div >
        )
    }
}

function mapStateToProps(state) {
    const productItems = state.products;
    return { productItems }
}

Home = connect(mapStateToProps, actions)(Home)
export default Home;