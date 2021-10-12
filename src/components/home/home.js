import React, { Component } from 'react';
import CarouselPage from '../carousel/carousel';
import PaymentInformation from './paymentInformation';
import ProductItem from '../../products/productItem';
import Footer from '../footer';

import axios from 'axios';
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
        this.getProducts();
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
                                    {/* {productsTv}
                                    {productsComputer}
                                    {productsGames}
                                    {productsHeadphones} */}
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

export default Home;