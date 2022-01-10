import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import axios from 'axios';

import { FormInput, FormButton } from '../formFields';
import AddressPageForm from './addressPageForm';
import AccountInformationAddressDelete from './accountInformationAddressDelete';
import PageTitle from '../pageTitle';



class AddressPage extends Component {
    constructor() {
        super()
        this.state = {
            addresses: {},
            showAddress: true
        }

        this.deleteAddress = this.deleteAddress.bind(this)
    }



    getAddresses() {
        axios.get("https://andreaguirre.herokuapp.com/user/address/2")
            .then(response => {
                this.setState({
                    addresses: { ...response.data }
                })
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

    }

    deleteAddress() {
        axios.delete("https://andreaguirre.herokuapp.com/user/address/2").then(response => {
            console.log("res", response)
        }).catch(error => {
            console.log("error", error)
        })
        console.log("working?")
        this.setState({ showAddress: false })
    }

    componentDidMount() {

        this.getAddresses();
    }



    render() {
        const { address_number, address_street, address_city, address_state, address_zip } = this.state.addresses;
        const { className, handleSubmit } = this.props;

        return (
            <div className='address'>
                <PageTitle title={'Your address'} />

                {
                    this.state.showAddress ?
                        <AccountInformationAddressDelete className='account-information__address-data' onClick={this.deleteAddress} number={address_number} street={address_street} city={address_city} state={address_state} zip={address_zip} /> : <div>You don't have an address</div>}
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



export default AddressPage;