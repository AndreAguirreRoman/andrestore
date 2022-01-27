import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CartTitle } from './cartFunctions'
import CartProducts from './cartFunctions';
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
    }
    render() {

        return (
            <div className='cart'>
                {this.state.showCart ?
                    <div className='cart__wrapper'>
                        <div className='cart__icon'>
                            <i className='fas fa-times-circle' />
                        </div>
                        <div className='cart__container'>
                            <CartTitle title={'Shopping Cart'} className={'cart__container-title'} products={this.props.cart} onClick={() => this.props.deleteAllProducts()} />
                            <CartProducts className={'cart__container-items'} />
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