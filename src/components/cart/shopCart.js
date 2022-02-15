import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CartTitle } from './cartFunctions'
import CartProducts from './cartFunctions';
import * as actions from '../../actions';


import OutsideClickHandler from 'react-outside-click-handler';
import CartButton from './cartButton';

class ShopCart extends Component {

    handleShowCart = () => {
        if (document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden');
        }
    }

    handleOutsideClick = () => {
        if (document.getElementById('shop-cart').classList.contains('cart-hidden')) {
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden');
        }
    }


    render() {
        const { className } = this.props;
        return (
            <OutsideClickHandler onOutsideClick={() => { document.getElementById('shop-cart').classList.add('cart-hidden') }}>
                <div className={`${className} cart`}>

                    <div className='cart__wrapper'>
                        <CartButton onClick={this.handleShowCart} className={'cart__icon'} icon={'fas fa-shopping-cart'} />
                        <div className='cart__container cart-hidden' id='shop-cart'>
                            <CartTitle title={'Shopping Cart'} className={'cart__container-title'} products={this.props.cart} onClick={() => this.props.deleteAllProducts()} />
                            <CartProducts className={'cart__container-items'} />
                        </div>
                    </div>
                </div>
            </OutsideClickHandler>



        )
    }
}

function mapStateToProps(state) {
    const cart = state.user.cart;

    return { cart }
}


ShopCart = connect(mapStateToProps, actions)(ShopCart)

export default ShopCart;