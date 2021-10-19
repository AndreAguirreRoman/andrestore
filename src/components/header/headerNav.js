import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link className='header-image' to={"/"}>
                    <img className='header-image__img' src='../../adre.png' />
                </Link>
                {/* SearchBar */}
                <div className='header__links'>
                    {
                        this.props.headerLinks.map((link, index) => {
                            return (
                                <a className='header__links-link' key={index} onClick={() => history.push(link.path)}>
                                    {link.title}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks } = state.headerNavbar
    return {
        headerLinks
    }
}

Header = connect(mapStateToProps)(Header)

export default Header;