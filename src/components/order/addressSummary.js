import React, { Component } from 'react';

class AddressSummary extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} address`}>Address Summary</div>
        )
    }
}

export default AddressSummary;