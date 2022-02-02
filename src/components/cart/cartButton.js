import React from 'react';

function CartButton({ className, icon, onClick }) {
    return (
        <a className={`${className} cart__icon__component`} onClick={onClick}>
            <i className={icon} />
        </a>
    )
}

export default CartButton;