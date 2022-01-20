import React, { Component } from 'react';

import PurchaseHistory from './purchaseHistory';
import AccountInformation from './accountInformation';

import { connect } from 'react-redux'
import * as actions from '../../actions';

class Account extends Component {

    componentDidMount() {

        const navbarLinks = [
            {
                _id: 0,
                title: 'Hello!',
                active: false,
                component: <PurchaseHistory />
            },
            {
                _id: 1,
                title: 'Hello2!',
                active: true,
                component: <AccountInformation />
            },
        ]

        const headerLinks = [
            {
                _id: 0,
                title: 'Shop',
                path: '/'
            },
            {
                _id: 1,
                title: 'Shopping',
                path: '/'
            }
        ]

        this.props.setHeaderLinks(headerLinks)
        this.props.setNavbarLinks(navbarLinks)
        this.props.getProducts();
    }

    renderContent() {
        let jsx;
        if (this.props.navbarLinks) {
            this.props.navbarLinks.forEach(link => {
                if (link.active) {
                    jsx = link.component;
                }
            })
        }
        return jsx;
    }

    render() {
        return (
            <div className='account'>
                {this.renderContent()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks, navbarLinks } = state.headerNavbar
    return { headerLinks, navbarLinks }
}

Account = connect(mapStateToProps, actions)(Account)

export default Account;