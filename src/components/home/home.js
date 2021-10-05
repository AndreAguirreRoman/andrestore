import React, { Component } from 'react';
import CarouselPage from '../carousel/carousel';
import PaymentInformation from './paymentInformation';
import ProductItem from '../../products/productItem';

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
        const products = this.state.productItems.map(productItem => {
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
                                    {products}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;