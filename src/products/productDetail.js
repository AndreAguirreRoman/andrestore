import React, { Component } from 'react';
import axios from 'axios';
import Gallery from 'react-amazon-gallery';

let images = [
    'https://via.placeholder.com/191x188',
    'https://via.placeholder.com/191x188',
    'https://via.placeholder.com/191x188',
    'https://via.placeholder.com/191x188'
]








class ProductDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productId: this.props.match.params.slug,
            productItem: {}
        }
    }

    getProductItem() {
        axios.get(
            `https://andreaguirre.herokuapp.com/product/${this.state.productId}`)
            .then(response => {
                this.setState({
                    productItem: response.data
                })
            })
            .catch(error => {
                console.log("error", error)
            })
    }

    componentDidMount() {
        this.getProductItem();
    }

    render() {
        const { product_brand, product_name } = this.state.productItem;
        console.log("currentId", this.state.productId)
        console.log("state", this.state.productItem)
        return (
            <div className='product-render'>
                <div className='product-render__wrapper'>


                    <div className='product-render__wrapper-gallery'>
                        <Gallery images={images} />
                    </div>

                    <div className='product-render__wrapper-information'>
                        <h1>{product_brand}</h1>
                        <h2>{product_name}</h2>
                    </div>




                </div>

            </div>
        )
    }
}

export default ProductDetail;
