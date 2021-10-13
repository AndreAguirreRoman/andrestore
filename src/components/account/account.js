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

        this.props.setHeaderLinks([])
        this.props.setNavbarLinks(navbarLinks)
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