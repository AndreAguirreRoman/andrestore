import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { withRouter } from 'react-router-dom';



class SearchBar extends Component {

    handleFormSubmit = function ({ query }) {
        this.props.onSubmit(query);
        this.props.history.push('/products/search')
    }


    renderInput(field) {
        return <input type='text' placeholder='Search' {...field.input} />
    }

    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className={className}>
                <Field name='query' component={this.renderInput} />
            </form>
        )
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;