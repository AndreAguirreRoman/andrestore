import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';
import axios from 'axios';

import PageTitle from '../pageTitle';
import Footer from '../footer';
import AccountInformationItem from './accountInformationItem';
import AccountInformationAddress from './accountInformationAddress';
import AccountInformationForm from './accountInformationForm';
import AccountInformationFormPassword from './accountInformationPassword';

class AccountInformation extends Component {
    constructor() {
        super();

        this.state = {
            addresses: [],
            userName: {}
        }

        // this.getAddresses = this.getAddresses.bind(this);
        this.getUserName = this.getUserName.bind(this);
    }

    // getAddresses() {
    //     axios.get("https://andreaguirre.herokuapp.com/user/address/1")
    //         .then(response => {
    //             this.setState({
    //                 addresses: { ...response.data }
    //             })
    //             console.log('this working?', response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })

    // }
    getUserName() {
        axios.get("https://andreaguirre.herokuapp.com/user/1")
            .then(response => {
                this.setState({
                    userName: { ...response.data }
                })
                console.log("hello", response)
            })
            .catch(error => {
                console.log(error)
            })

    }




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
                path: '/products/headpnes',
                active: false,
            },
        ]


        this.props.setHeaderLinks(headerLinks)
        this.props.setNavbarLinks(navbarLinks)
        this.props.getAddress();
        // this.getAddresses();
        this.getUserName();
    }

    // const computers = this.props.products.filter((productItem) => productItem.product_category_name.includes('Computer')).map(productItem => {
    renderAddress = function () {
        const addressesItems = this.props.addresses.addresses.filter((addressesItem) => addressesItem.address_user_id === 1).map((addressesItem) => {
            return (
                <AccountInformationAddress
                    key={addressesItem.address_id}
                    className='account-information__address-data'
                    title='Address'
                    number={addressesItem.address_number}
                    street={addressesItem.address_street}
                    city={addressesItem.address_city}
                    state={addressesItem.address_state}
                    zip={addressesItem.address_zip}
                    link='account/address' />
            )
        })
        return addressesItems;
    }


    render() {
        const { user_first_name, user_last_name, user_email } = this.state.userName;
        // const address { address_number, address_street, address_city, address_state, address_zip } = this.props.addresses;

        console.log("data",)
        return (
            <div className='account-information'>
                <PageTitle className='account-information__title' title='Account & Information' />
                <div className='account-information__user'>
                    <AccountInformationItem className='account-information__user-data-name' title='Name' value={user_first_name} valueTwo={user_last_name} link='user/name' />
                    <AccountInformationItem className='account-information__user-data-email' title='Email' value={user_email} link='user/email' />

                </div>


                <div className='account-information__address'>
                    {this.renderAddress()}
                    {/* <AccountInformationAddress className='account-information__address-data' title='Address' number={address_number} street={address_street} city={address_city} state={address_state} zip={address_zip} link='user/address' /> */}
                </div>
                <hr />
                <div className='account-information__passwords'>
                    <AccountInformationFormPassword title='Password' className='account-information__passwords-form' />
                </div>
                {/* <div> 
                    <AccountInformationForm onSubmit={this.onSubmit} required={this.required} />
                </div> */}

                <Footer className='account-information__footer' />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        addresses: state.addresses
    }
}

AccountInformation = connect(mapStateToProps, actions)(AccountInformation)

export default AccountInformation;