import React, { Component } from 'react';
import PageTitle from '../pageTitle';

class AddressSummary extends Component {
    render() {
        const { className, address, user } = this.props;
        // console.log("mamafoca", address)
        return (
            <div className={`${className} address`}>
                <PageTitle className='address__title' title={"Your Information"} />
                <div className='address__receiver'>
                    <h1>Receiver:</h1>
                    <div className='address__receiver-text'>{user.user_first_name} {user.user_last_name}</div>
                </div>
                <div className='address__email'>
                    <h1>Email:</h1>
                    <div className='address__receiver-text'>{user.user_email}</div>
                </div>
                <div className='address__ships'>
                    <h1>Ships to:</h1>
                    <div className='address__receiver-text'>{address.address_street} {address.address_number}, {address.address_city}, {address.address_state}, {address.address_zip}</div>
                </div>

            </div>
        )
    }
}

export default AddressSummary;