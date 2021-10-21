import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Footer from '../footer';

import PageTitle from '../pageTitle';
import PurchaseDetail from './purchaseDetail';
import Purchases from './purchases';

class PurchaseHistory extends Component {

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

        this.props.setHeaderLinks(headerLinks)
        this.props.setNavbarLinks(navbarLinks)
    }





    render() {
        return (
            <div className='purchase-history'>
                <PageTitle className='purchase-history__title' title='Orders' />
                <div className='purchase-history__content'>
                    <Purchases className='purchase-history__purchases' />
                    <PurchaseDetail className='purchase-history__detail' />
                </div>
                <Footer className='purchase-history__footer' />
            </div>
        )
    }
}


PurchaseHistory = connect(null, actions)(PurchaseHistory)

export default PurchaseHistory;