import React, { Component } from 'react';
import history from '../../history';


class AccountAddressDelete extends Component {

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


                <div className='account-addresses__wrapper '>
                    <div className='account-addresses__wrapper-title'>{title}</div>
                    <div className='account-addresses__wrapper-data'>
                        <div className='account-addresses__wrapper-data__info'>
                            <div className='account-addresses__wrapper-data__info-street'>{number} {street},</div>
                            <div className='account-addresses__wrapper-data__info-state'>{city}, {state}, {zip}</div>
                        </div>
                        <div className='account-addresses__wrapper-data__button'>
                            <button className='account-addresses__wrapper-data__button-edit' onClick={() => history.push('/account/address/edit')}><i className="fas fa-edit"></i></button>
                            <button className='account-addresses__wrapper-data__button-delete' onClick={onClick}><i className="fas fa-trash"></i></button>
                        </div>

                    </div>

                </div>

            </div >



        )
    }
}

export default AccountAddressDelete;
