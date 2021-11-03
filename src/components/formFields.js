import React, { Component } from 'react';

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

// export class FormSelectSub extends Component {
//     render() {
//         const { className, title } = this.props;
//         return (
//             <div className={`${className} form-input`}>
//                 <label className='form-input__label'>{title}</label>
//                 <select className='form-input__input'>
//                     <option value={null}>Select Sub-category</option>
//                     <option value="Smartphone">Smartphone</option>
//                     <option value="Cellphone">Cellphone</option>
//                     <option value="Smartcamera">SmartCamera</option>
//                     <option value="Console">Console</option>
//                     <option value="Controles">Controles</option>
//                     <option value="SmartTv">Smart TV</option>
//                     <option value="Laptop">Laptop</option>
//                     <option value="Desktop">Desktop</option>
//                     <option value="Wireless">Wireless</option>
//                     <option value="Studio">Studio</option>
//                 </select>
//             </div>
//         )
//     }
// }

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