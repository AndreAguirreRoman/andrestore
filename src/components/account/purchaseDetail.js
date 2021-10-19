import React, { Component } from 'react';


class PurchasesDetail extends Component {
    render() {

        const { className } = this.props;

        return (
            <div className={`${className}`}>
                Purchases go here
            </div>
        )
    }
}

export default PurchasesDetail;