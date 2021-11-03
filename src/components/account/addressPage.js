import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import axios from 'axios';

import { FormInput, FormButton } from '../formFields';
import AddressPageForm from './addressPageForm';
import AccountInformationAddressDelete from './accountInformationAddressDelete';


class AddressPage extends Component {
    constructor() {
        super()
        this.state = {
            addresses: {},
            info: true
        }
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
            this.setState({
                info: false
            })
        }).catch(error => {
            console.log("error", error)
        })
    }

    componentDidMount() {

        this.getAddresses();
    }



    render() {
        const { address_number, address_street, address_city, address_state, address_zip } = this.state.addresses;
        const { className, handleSubmit } = this.props;

        return (
            <div className='address'>
                {/* <AddressPageForm /> */}
                {this.state.info === false ? <div></div> : <AccountInformationAddressDelete className='account-information__address-data' onClick={this.deleteAddress} title='Address' number={address_number} street={address_street} city={address_city} state={address_state} zip={address_zip} />}

            </div>

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