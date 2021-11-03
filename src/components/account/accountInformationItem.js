import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AccountInformationItem extends Component {
    render() {
        const { className, title, value, link, valueTwo } = this.props;
        return (
            <div className={`${className} user-info`}>

                <div className='user-info__wrapper'>
                    <div className='user-info__wrapper-title'>{title}</div>
                    <Link className='user-info__link ' to={`${link}`}>
                        <div className='user-info__wrapper-values'>{value} {valueTwo}</div>
                    </Link>
                </div>


            </div>
        )
    }
}

export default AccountInformationItem;