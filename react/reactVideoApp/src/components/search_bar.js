// Import React library 
// Import the Component specifically to make extending easier
import React, { Component } from 'react';

// JS Object with functionality imported from React.Component
class SearchBar extends Component {

	// Constructor to define/change state
		// Constructor inits variables and state
	constructor(props) {
		// Override Component's constructor function
		super(props);

		// Object has properties to record for state
		// Update the term value on every update to the SearchBar component
		this.state = { term : '' };
	}

	// Render Method
	render() {
		// Add <input /> tag with an event handler
			// Event handler will set the state of the object instance 
			// by updating the term key to include the new value
		return (
			// Every update to state (type in input) the object instance will rerender
			<div className='search-bar'>
				<input 
					// Controlled input: when rerender, value is set to this.state.term
						// Init val of value is '' since constructor creates term to be ''
						// Will update on the next render cycle (value of input is equal to state)
						// On every render, update the state to focus on the search term
					value={ this.state.term }
					onChange={ event => this.onInputChange(event.target.value) } />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

// Declare connection to index.js so silo between files is broken
// Now files can import SearchBar
export default SearchBar;