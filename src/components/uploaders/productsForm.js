import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import axios from 'axios';
import history from '../../history';

import { FormInput, FormButton, FormSelectCat, FormSelectSub } from '../formFields';

class ProductForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product_name: "",
            product_brand: "",
            product_category_name: "",
            product_subcategory_name: "",
            product_description: ""
        }


    }

    onSubmit = (fields) => {
        console.log(fields)
    }


    render() {


        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} products-form`}>
                <Field className='products-form__name' type='product name' placeholder='Product name' title='Product name' name='product name' component={FormInput} />
                <Field className='products-form__brand' type='brand' placeholder='Brand' title='Brand' name='brand' component={FormInput} />
                <label className='form-input__label'>Select category</label>
                <Field className='form-input__input' name="category" component="select">
                    <option value={null}>Select Category</option>
                    <option value="Phones">Phones</option>
                    <option value="Camera">Camera</option>
                    <option value="Video-Games">Video Games</option>
                    <option value="TV">TV</option>
                    <option value="Computer">Computer</option>
                    <option value="Headphones">Headphones</option>

                </Field>
                <label className='form-input__label'>Select subcategory</label>
                <Field className='form-input__input' name="sub-category" component="select">
                    <option value={null}>Select Sub-category</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Cellphone">Cellphone</option>
                    <option value="Smartcamera">SmartCamera</option>
                    <option value="Console">Console</option>
                    <option value="Controles">Controles</option>
                    <option value="SmartTv">Smart TV</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Desktop">Desktop</option>
                    <option value="Wireless">Wireless</option>
                    <option value="Studio">Studio</option>

                </Field>
                {/* <Field className='products-form__subcategory' name="subcategory" title='Sub-category' component={FormSelectSub} />
                <Field className='products-form__subcategory' name="subcategory" title='Sub-category' component={FormSelectSub} /> */}
                <Field className='products-form__subcategory' type='subcategory' placeholder='Subcategory' title='Subcategory' name='subcategory' component={FormInput} />
                <Field className='products-form__description' type='description' placeholder='Description' title='Description' name='description' component={FormInput} />
                <Field className='products-form__submit' type='submit' placeholder='Submit' title='Submit' name='submit' component={FormButton} />

            </form>
        )
    }
}


ProductForm = reduxForm({
    form: 'ProductForm'
})(ProductForm)



export default ProductForm;