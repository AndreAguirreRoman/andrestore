import React, { Component } from 'react';


class AccountInformationAddressDelete extends Component {

    constructor() {
        super();

        this.state = {
            showAddress: true
        }
    }
    render() {
        const { className, title, number, street, city, state, zip, onClick } = this.props;
        return (
            <div className={`${className} addresses`}>

                <div className='account-addresses__wrapper'>
                    <div className='account-addresses__wrapper-title'>{title}</div>
                    <div className='account-addresses__wrapper-data'>
                        <div className='account-addresses__wrapper-data__info'>
                            <div className='account-addresses__wrapper-data__info-street'>{number} {street},</div>
                            <div className='account-addresses__wrapper-data__info-state'>{city}, {state}, {zip}</div>
                        </div>

                        <button className='account-addresses__wrapper-data__delete' onClick={onClick}><i className="fas fa-trash"></i></button>
                    </div>

                </div>

            </div>



        )
    }
}

export default AccountInformationAddressDelete;
