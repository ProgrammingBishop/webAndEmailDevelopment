import React, { Component } from 'react';
// reduxForm is like a connector that helps communication to the reducer
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class PostsNew extends Component {
	// field param maps to Field tag
	renderField(field) {
		// Pulls meta from field 
		// Then pulls touched and error from meta
		const { meta : { touched, error } } = field;
		// Dynamic CSS
		const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

		// .input handles common field methods
		// ... makes all of these properties/methods to communicate to input tag
		// meta.error has the builtin error property added from the validate function
		// meta has 3 field states
			// pristine (untouched)
			// touched (touched)
			// invalid (if after touched the expected value is wrong)
		return (
			<div className={ className }>
				<label>{ field.label }</label>
				<input 
					className='form-control'
					{ ...field.input }
				/>

				<div className='text-help'>
					{ touched ? error : '' }
				</div>
			</div>
		);
	}


	onSubmit(values) {
		// These can then be posted to backend API
		this.props.createPost(values, () => {
			// Whenever executed, navigate back to route
				// route needs to be existent in Route on main page
			this.props.history.push('/');
		});
	}


	// redux form handles form state
	// but redux form does not handle posting data to a server
	render() {
		// passed to reduxForm from the export
		const { handleSubmit } = this.props;

		// Field only knows how to interact with the redux form
		// Use as component (JSX) to display the Field
		// properties are passed into field argument
		return (
			// passes function to handleSubmit if form passes validation
				// So on successful submission callback function
			<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
				<Field
					label='Title'
					name='title'
					component={ this.renderField }
				/>

				<Field
					label='Categories'
					name='categories'
					component={ this.renderField }
				/>

				<Field
					label='Post Content'
					name='content'
					component={ this.renderField }
				/>

				<button type='submit' className='btn btn-primary'>Submit</button>
				<Link to='/' className='btn btn-danger'>Cancel</Link>
			</form>
		);
	}
}


// values are the values user entered into the form
function validate(values) {
	const errors = {};

	// Validate the inputs
		// Assure errors property matches the field name
	if (!values.title) {
		errors.title = 'Enter a title';
	}

	if (!values.categories) {
		errors.categories = 'Enter categories';
	}

	if (!values.content) {
		errors.content = 'Enter content';
	}

	// Return the errors (if empty form submits)
	// If errors not empty form invalid
	return errors;
}


// Just helps to communicate with the reducer
export default reduxForm({ 
	// called whenever user tries to submit the form
	validate : validate,
	// name of the form in case there are multiple forms
	form : 'PostsNewForm'
})(
	//Stack multiple connection helpers
	connect(null, { createPost })(PostsNew)
);