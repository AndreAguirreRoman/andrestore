import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} footer`}>
                <hr className='footer__line'></hr>
                <div className='footer__links'>
                    <a className='footer__links-link' onClick={() => console.log('Terms and conditions?')}> Terms and Conditions </a>
                    <a className='footer__links-link' onClick={() => console.log('Privacy?')}>Privacy Note </a>
                    <a className='footer__links-link' onClick={() => console.log('Legal info?')}>Legal </a>
                </div>
                <div className='footer__copyright'>
                    &copy; 2021 Andre &#124;   All rights reserved.
                </div>
            </div>
        )
    }
}

export default Footer;