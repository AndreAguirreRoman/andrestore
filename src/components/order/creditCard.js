import React, { Component } from 'react';

class CreditCard extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} cc`}>Credit cardy</div>
        )
    }
}

export default CreditCard;