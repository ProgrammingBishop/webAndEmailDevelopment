// Render list of books
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// Assures the generated action flows to all of the reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map( (book) => {
			return (
				<li 
					key={ book.title } 
					// This accomplishes step one in action life cycle
						// User clicks on book in view to execute an action creator
					onClick={ () => this.props.selectBook(book) }
					className='list-group-item'>
					{ book.title }
				</li>
			);
		});
	}

	render() {
		return (
			<ul className='list-group col-sm-4'>
				{ this.renderList() }
			</ul>
		);
	}
}

// Whenever state changes, the list will rerender 
// and the list will update the props object
function mapStateToProps(state) {
	// What is returned here is going to show up a props from BookList
		// NOTE: '{}' because returning a list
	return {
		// Connects Redux to the state of React 
		books : state.books
	};
}

// Anything returned will end up as props to the BookList container 
function mapDispatchToProps(dispatch) {
	// whenever select book is calles the result should be passed to all of the reducers
		// dispatch receives actions and funnels them to the reducers
		// First arg selectBook will be available as props in container
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Export container and not the class object instance
	// connect takes a function and a component to produce a container
	// container is smart in that it is aware of the state of redux

	// Promote BookList from a component to a container 
		// needs to know about this dispatch method SelectBook
		// Make it available as a prop
			// Look at 'connect' documentation on how to set up containers
export default connect(mapStateToProps, mapDispatchToProps)(BookList);