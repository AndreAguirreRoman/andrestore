import React, { Component } from 'react';

// export class SearchInput extends Component {
//     render() {
//         const { className, type, placeholder, input, id } = this.props;

//         return (
//             <div className={`${className} search-input`}>
//                 <input className={'search-input__input'} id={id} type={type} placeholder={placeholder} {...input} />
//             </div>
//         )
//     }
// }

export class FormInput extends Component {
    render() {
        const { className, title, type, placeholder, input, id } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className='form-input__label'>{title} </label>
                <input className={`form-input__input`} id={id} type={type} placeholder={placeholder} {...input} />
            </div>
        )

    }
}
export class CreditCardInputLeft extends Component {
    render() {
        const { className, title, type, placeholder, input, id, maxLength } = this.props;
        return (
            <div className={`${className} cc-input-left cc-form__fields-input`}>
                <label className='cc-input__label-left'>{title} </label>
                <input className={`cc-input__input-left`} maxLength={maxLength} id={id} type={type} placeholder={placeholder} {...input} />
            </div>
        )

    }
}
export class CreditCardInputRight extends Component {
    render() {
        const { className, title, type, placeholder, input, id, maxLength } = this.props;
        return (
            <div className={`${className} cc-input-right cc-form__fields-input`}>
                <label className='cc-input__label-right '>{title} </label>
                <input className={`cc-input__input-right`} id={id} maxLength={maxLength} type={type} placeholder={placeholder} {...input} />
            </div>
        )

    }
}
export class CreditCardInputCV extends Component {
    render() {
        const { className, title, type, placeholder, input, id, maxLength } = this.props;
        return (
            <div className={`${className} cc-input-right cc-form__fields-input`}>
                <label className='cc-input__label-right cv-label'>{title} </label>
                <input className={`cc-input__input-right cv`} maxLength={maxLength} id={id} type={type} placeholder={placeholder} {...input} />
            </div>
        )

    }
}

export class CreditCardDate extends Component {
    render() {
        const { className, title, id, maxLength, placeholder, input, type } = this.props;
        return (
            <div className={`${className} cc-date cc-form__fields-input`}>
                <label className='cc-date__label'>{title}</label>
                <input className={`cc-date__input-text`} id={id} maxLength={maxLength} type={type} placeholder={placeholder} {...input} />
            </div>
        )
    }
}

export class CreditCardDateYear extends Component {
    render() {
        const { className, type, placeholder, id, input, maxLength } = this.props;
        return (
            <div className={`${className} cc-year cc-form__fields-input`}>
                <input className={`cc-date__input-text`} id={id} maxLength={maxLength} type={type} placeholder={placeholder} {...input} />
            </div>
        )
    }
}

export class AddressInput extends Component {
    render() {
        const { className, title, type, placeholder, info, id } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className='form-input__label'>{title} </label>
                <input className={`form-input__input`} id={id} type={type} placeholder={placeholder} {...info} />
            </div>
        )

    }
}

export class FormSelectCat extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className='form-input__label'>{title}</label>
                <select className='form-input__input'>
                    <option value={null}>Select Category</option>
                    <option value="Phones">Phones</option>
                    <option value="Camera">Camera</option>
                    <option value="Video-Games">Video Games</option>
                    <option value="TV">TV</option>
                    <option value="Computer">Computer</option>
                    <option value="Headphones">Headphones</option>
                </select>
            </div>
        )
    }
}


export class FormSelectSub extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className='form-input__label'>{title}</label>
                <select className='form-input__input'>
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
                </select>
            </div>
        )
    }
}



export class FormButton extends Component {
    render() {
        const { className, title, type, onClick, input } = this.props;
        return (
            <div className={`${className} form-button`}>
                <button className='form-button__button'
                    type={type}
                    {...input}
                    onClick={onClick}
                >
                    {title}
                </button>
            </div>
        )

    }
}

export class LongGrayButton extends Component {
    render() {
        const { className, title, type, onClick, input, placeholder } = this.props;
        return (
            <div className={`${className} form-button-long-gray`}>
                <label className='form-button-long-gray__label'>{title} </label>
                <button className={`form-button-long-gray__button gray-btn`}
                    type={type}
                    {...input}
                    onClick={onClick}
                >
                    {placeholder}
                </button>
            </div>
        )

    }
}
export class LongGrayPassword extends Component {
    render() {
        const { className, title, type, onClick, input, placeholder } = this.props;
        return (
            <div className={`${className} form-button-long-password`}>
                <label className='form-button-long-password__label'>{title} </label>
                <button className={`form-button-long-password__button password-btn`}
                    type={type}
                    {...input}
                    onClick={onClick}
                >
                    {placeholder}
                </button>
            </div>
        )

    }
}

export class AnotherButton extends Component {
    render() {
        const { className, title, type, onClick, input } = this.props;
        return (
            <div className={`${className} form-button`}>
                <button className='form-button__button address-btn'
                    type={type}
                    {...input}
                    onClick={onClick}
                >
                    {title}
                </button>
            </div>
        )

    }
}