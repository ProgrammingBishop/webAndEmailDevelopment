import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		// Since active_book reducer is null state on start, handle the null state
		if (!this.props.book) {
			return <div>Select book to start</div>
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: { this.props.book.title }</div>
				<div>Detail: { this.props.book.details }</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book : state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);