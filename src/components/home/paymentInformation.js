import React, { Component } from 'react';




class PaymentInformation extends Component {


    render() {
        const { className } = this.props;
        return (
            <div className={`${className} payment-wrapper`}>

                <div className='payment-wrapper__section'>
                    <div className='payment-wrapper__section-info'>
                        <div className='payment-wrapper__section-info-text'>
                            <p className='payment-wrapper__section-info-text-one'>Secure Payment</p>
                            <p className='payment-wrapper__section-info-text-two'>on all your cards</p>
                        </div>
                    </div>

                </div>
                <div className='payment-wrapper__section'>
                    <div className='payment-wrapper__section-visa'>
                        <div className='payment-wrapper__section-visa-icon'>
                            <i className="fab fa-cc-visa"></i>
                        </div>
                    </div>

                </div>
                <div className='payment-wrapper__section'>
                    <div className='payment-wrapper__section-master'>
                        <div className='payment-wrapper__section-master-icon'>
                            <i className="fab fa-cc-mastercard"></i>
                        </div>
                    </div>

                </div>
                <div className='payment-wrapper__section'>
                    <div className='payment-wrapper__section-amex'>
                        <div className='payment-wrapper__section-amex-icon'>
                            <i className="fab fa-cc-amex"></i>
                        </div>
                    </div>

                </div>

                <div className='payment-wrapper__section'>
                    <div className='payment-wrapper__section-discover'>
                        <div className='payment-wrapper__section-discover-icon'>
                            <i className="fab fa-cc-discover"></i>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default PaymentInformation;