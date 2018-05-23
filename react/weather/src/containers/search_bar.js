// Components to the Application are derived from the component class
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Want to connect fetchWeather to the SearchBar
import { fetchWeather } from '../actions/index'



// Make visible a SearchBar Component
class SearchBar extends Component {
	// Init state within the constructor
	constructor(props) {
		// Override the extended Components
		super(props);

		// Define state parameters and init values
		this.state = { term : '' };

		// SearchBar has instance of onInputChange
		// bind this instance to SearchBar
		// Replace existing onInputChange instance with the new bounded instance
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}


	// Method called from <input /> onChange property
		// All DOM methods come with an onChange handler
	onInputChange(event) {
		// Update the state 'term' with input value
		this.setState({ term : event.target.value });
	}


	// Prevent browser from submitting the form
	onFormSubmit(event) {
		event.preventDefault();

		// Execute action creator via actions/index.js when form request is submitted
			// Connect SearchBar to Redux using the 'connect' method
			// Pass the submitted city to the actions/findex.js to get API URL GET info
			// REMEMBER: bind action in the constructor
		this.props.fetchWeather(this.state.term);

		// Clear search input to '' after submit
		this.setState({ term : '' });
	}
 

	// Updates to be made on render()
	render() {
		// Return (as a component) the following HTML:
		// HTML NOTES:
			// <input /> Adding change handler to update the state over time
			// value is what transforms component into a controlled component
				// this.state.term is what sets  the input's value
			// onChange will execute a function when the value is updated by an updated state
				// Whenever passing callback around with a call to 'this' you need to bind the context
		return (
			<form 
				className='input-group'
				onSubmit={ this.onFormSubmit }
			>
				<input 
					placeholder='Get Forecast'
					className='form-control'
					value={ this.state.term }
					onChange={ this.onInputChange }
				/>

				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		);
	}
}


function mapDispatchToProps(dispatch) {
	// fetchWeather forces action creator to be called and return an action
	// bindActionCreators with dispatch assures action flows down into the middleware and then the reducers in Redux app
	return bindActionCreators({ fetchWeather }, dispatch);
}


// mapDispatchToProps maps props to container
// null exists to only assures mapDispatchToProps is the second argument. Do not care about state
// SearchBar componenent can now access this.props.fetchWeather
export default connect(null, mapDispatchToProps)(SearchBar);