// import React, { Component } from 'react';

// import { connect } from 'react-redux';
// import * as actions from '../../actions'

// import axios from 'axios';
// import ProductDesign from './productDesign';
// import PageTitle from '../pageTitle';

// class AllProducts extends Component {


//     constructor() {
//         super();

//         this.state = {
//             productItems: []
//         }

//         this.getProducts = this.getProducts.bind(this);
//     }

//     getProducts() {
//         axios.get("https://andreaguirre.herokuapp.com/products")
//             .then(response => {
//                 this.setState({
//                     productItems: [...response.data]
//                 })
//                 console.log(response)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }

//     componentDidMount() {

//         const headerLinks = [
//             {
//                 _id: 0,
//                 title: <div className='header-icon'>
//                     <div className='header-icon__icon'><i className="fas fa-user-circle" ></i></div>
//                     <div className='header-icon__text'>Account & Information</div>
//                 </div>,
//                 active: false,
//                 path: '/account'
//             },
//             {
//                 _id: 1,
//                 title: 'Orders',
//                 active: true,
//                 path: '/orders'
//             },
//         ]

//         const navbarLinks = [
//             {
//                 _id: 0,
//                 title: 'All',
//                 path: '/products',
//                 active: false,
//             },
//             {
//                 _id: 1,
//                 title: 'Phones',
//                 path: '/products/phones',
//                 active: false,
//             },
//             {
//                 _id: 2,
//                 title: 'Cameras',
//                 path: '/products/cameras',
//                 active: false,
//             },
//             {
//                 _id: 3,
//                 title: "TV's",
//                 path: '/products/tv',
//                 active: false,
//             },
//             {
//                 _id: 4,
//                 title: 'Computers',
//                 path: '/products/computers',
//                 active: false,
//             },
//             {
//                 _id: 5,
//                 title: 'Video Games',
//                 path: '/products/video-games',
//                 active: false,
//             },
//             {
//                 _id: 6,
//                 title: 'Headphones',
//                 path: '/products/headphones',
//                 active: false,
//             },
//         ]




//         this.getProducts();
//         this.props.setHeaderLinks(headerLinks)
//         this.props.setNavbarLinks(navbarLinks)
//     }


//     render() {

//         const allProducts = this.state.productItems.map(productItem => {
//             return (
//                 <ProductDesign key={productItem.product_id} className='all-products__wrapper-item design' productItem={productItem} />
//             )
//         })

//         return (
//             <div className='filter'>
//                 <PageTitle className={'filter__title'} title={'All products'} />
//                 <div className='all-products'>
//                     {allProducts}
//                 </div>
//             </div>
//         )
//     }
// }
// function mapStateToProps(state) {
//     return { state }
// }

// AllProducts = connect(mapStateToProps, actions)(AllProducts);

// export default AllProducts;