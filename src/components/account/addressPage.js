import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';
import axios from 'axios';


import AccountAddressDelete from './accountAddressDelete';
import PageTitle from '../pageTitle';



class AddressPage extends Component {
    constructor() {
        super()
        this.state = {
            showAddress: true
        }

        this.deleteAddress = this.deleteAddress.bind(this)
    }

    componentDidMount() {
        this.props.getAddress();
    }


    deleteAddress() {
        axios.delete("https://andreaguirre.herokuapp.com/user/address/1").then(response => {
            console.log("res", response)
        }).catch(error => {
            console.log("error", error)
        })
        // console.log("working?")
        this.setState({ showAddress: false })
    }

    render() {
        const { address_number, address_street, address_city, address_state, address_zip } = this.props.addresses;


        return (
            <div className={`address-edit`}>
                <PageTitle title={'Your address'} />

                {
                    this.props.addresses ?
                        <AccountAddressDelete className='account-information__address-data' onClick={this.deleteAddress} number={address_number} street={address_street} city={address_city} state={address_state} zip={address_zip} /> : <div>You don't have an address</div>}
            </div >

        )
    }
}

// const selector = formValueSelector('MyFormName')

// const mapStateToProps = reducers => {
//   // obtain shipping address values from the redux store
//   const {
//     address,
//     addressOptional,
//     city,
//     zipCode,
//     country
//   } = selector(reducers, 'shipping')

//   return {
//     initialValues: {
//       // shipping address is empty initially
//       shipping: {
//         address: '',
//         addressOptional: '',
//         city: '',
//         zipCode: '',
//         country: ''
//       },
//       // billing address initial values are changed any time
//       // the shipping address values are changed
//       billing: {
//         address,
//         addressOptional,
//         city,
//         zipCode,
//         country
//       }
//     }
//   }
// }

// @connect(mapStateToProps)
// @reduxForm({
//   form: 'MyFormName',
//   // reinitialize the form every time initialValues change
//   enableReinitialize: true,
//   // make sure dirty fields (those the user has already edited)
//   // are not overwritten by reinitialization
//   keepDirtyOnReinitialize: true
// })

function mapStateToProps(state) {
    return state.user
}

AddressPage = connect(mapStateToProps, actions)(AddressPage)

export default AddressPage;