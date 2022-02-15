import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { CreditCardInputLeft, CreditCardInputRight, CreditCardDate, CreditCardInputCV, CreditCardDateYear } from '../formFields';
import history from '../../history';

class CreditCardForm extends Component {





    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} cc-form`}>
                <div className='cc-form__fields'>
                    <Field className='cc-form__top-name' title='Name' type='name' placeholder="Holder's Name" name='name' component={CreditCardInputLeft} />
                    <Field className='cc-form__top-number' maxLength={17} title='Card Number' type='card-number' placeholder={'Number'} name='card' component={CreditCardInputRight} />
                    <Field className='cc-form__bottom-exp-month' maxLength={2} title='Valid Thru' id={1} type='expMonth' name='expMonth' placeholder='MM' component={CreditCardDate} />
                    <Field className='cc-form__bottom-exp-year' maxLength={2} id={1} type='expYear' placeholder="YY" name='expYear' component={CreditCardDateYear} />
                    <Field className='cc-form__bottom-cvv' maxLength={4} title='CVV' type='cvv' placeholder="CVV" name='cvv' component={CreditCardInputCV} />
                    <div className='cc-form__bottom-secure' ><i className="cc-form__bottom-secure__icon fas fa-lock"></i>End-to-end encrypted.</div>
                </div>
                <div className='cc-form__buttons'>
                    <div className='cc-form__buttons__back'>
                        <button type='button' onClick={() => history.push('/')}>Back</button>
                    </div>
                    <div className='cc-form__buttons__pay'>
                        <button  >Pay</button>
                    </div>

                </div>

            </form >
        )
    }
}

function mapStateToProps(state) {
    return state
}

CreditCardForm = connect(mapStateToProps, actions)(CreditCardForm)


export default reduxForm({
    form: 'CreditCardForm'
})(CreditCardForm)

