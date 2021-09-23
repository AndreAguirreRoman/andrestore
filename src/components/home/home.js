import React, { Component } from 'react';
import CarouselPage from '../carousel/carousel';
import PaymentInformation from './paymentInformation';




class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='home__carousel'>
                    <CarouselPage className='home__carousel-module' />
                </div>
                <div className='home__products'>
                    <div className='home__products-payment'>
                        <PaymentInformation className='home__products-payment__info' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;