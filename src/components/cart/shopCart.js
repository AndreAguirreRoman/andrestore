import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CartProducts, CartTitle } from './cartFunctions'
import * as actions from '../../actions';

class ShopCart extends Component {
    constructor() {
        super();

        this.state = {
            showCart: true
        }

    }


    componentDidMount() {
        this.props.setCartProducts();
        // this.props.deleteProduct();
    }
    render() {
        console.log("hELLO", this.props.cart)

        // const productId = this.props.cart.map(product => {
        //     return product.product_id
        // });
        // console.log("productId", productId)
        return (
            <div className='cart'>
                {this.state.showCart ?
                    <div className='cart__wrapper'>
                        <div className='cart__icon'>
                            <i className='fas fa-times-circle' />
                        </div>
                        <div className='cart__container'>
                            <CartTitle title={'Shopping Cart'} className={'cart__container-title'} />
                            <CartProducts className={'cart__container-items'} products={this.props.cart} />
                        </div>
                    </div>
                    :
                    ''
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    const cart = state.user.cart;

    return { cart }
}

ShopCart = connect(mapStateToProps, actions)(ShopCart)

export default ShopCart;