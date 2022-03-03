import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AccountAddress extends Component {
    render() {
        const { className, title, number, street, city, state, zip, link } = this.props;
        return (
            <div className={`${className} addresses`}>

                <div className='addresses__wrapper'>
                    <div className='addresses__wrapper-title'>{title}</div>
                    <div className='addresses__wrapper-data'>
                        <Link className='addresses-link' to={`${link}`}>
                            <div className='addresses__wrapper-data-street'>{number} {street},</div>
                            <div className='addresses__wrapper-data-state'>{city}, {state}, {zip}</div>
                        </Link>
                    </div>

                </div>

            </div>
        )
    }
}

export default AccountAddress;

