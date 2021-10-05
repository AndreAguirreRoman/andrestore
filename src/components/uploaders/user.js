import React, { Component } from 'react';

import UserForm from './userForm';
import PageTitle from '../pageTitle';
import Footer from '../footer'



class User extends Component {

    onSubmit = (fields) => {
        console.log(fields)
    }
    render() {
        return (
            <div className='user'>
                <div className='user-box'>
                    <PageTitle className='user-box__page-title' title='Address' />
                    <UserForm onSubmit={this.onSubmit} className='user__form' />
                    <Footer className='user-box__footer' />
                </div>

            </div>
        )
    }
}

export default User;