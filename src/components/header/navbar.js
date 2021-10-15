import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';

import history from '../../history';


class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                {
                    this.props.navbarLinks.map((link, index) => {
                        return (
                            <a className='navbar__link' key={index} onClick={() => history.push(link.path)}>
                                {link.title}
                            </a>
                        )
                    })
                }


            </div >
        )
    }
}

function mapStateToProps(state) {
    const { navbarLinks } = state.headerNavbar
    return {
        navbarLinks
    }
}

Navbar = connect(mapStateToProps, actions)(Navbar)

export default Navbar;