import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import axios from 'axios';
import ProductDesign from './productDesign';

class Tv extends Component {

    constructor() {
        super();

        this.state = {
            productItems: []
        }

        this.getProducts = this.getProducts.bind(this);
    }

    getProducts() {
        axios.get("https://andreaguirre.herokuapp.com/products")
            .then(response => {
                this.setState({
                    productItems: [...response.data]
                })
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {

        const headerLinks = [
            {
                _id: 0,
                title: <i className="fas fa-user-circle"> Account & information</i>,
                active: false,
                path: '/account'
            },
            {
                _id: 1,
                title: 'Orders',
                active: true,
                path: '/'
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




        this.getProducts();
        this.props.setHeaderLinks(headerLinks)
        this.props.setNavbarLinks(navbarLinks)
    }

    render() {
        const tv = this.state.productItems.filter((productItem) => productItem.product_category_name.includes("TV")).map(productItem => {
            return (
                <div>
                    <ProductDesign key={productItem.product_id} productItem={productItem} />
                </div>
            )
        })

        return (
            <div className='all-products'>
                {tv}
            </div>
        )
    }
}

Tv = connect(null, actions)(Tv);

export default Tv;