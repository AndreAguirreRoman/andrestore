import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} buttons`}>Buttons</div>
        )
    }
}

export default Buttons;