import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
// Emulates an anchor tag, but for React
	// Allows to click around React app to init different routes
import { Link } from 'react-router-dom';
import _ from 'lodash';


class PostsIndex extends Component {
	// Lifecycle method
		// functon on react component class automatically called by react
		// called once it has appeared within the DOM
	componentDidMount() {
		// Load in Data
		this.props.fetchPosts();
	}

	renderPosts() {
		// lodash map function helps to deal with objects
			// For every post create a DOM elements
		return _.map(this.props.posts, post => {
			return (
				<li className='list-group-item' key={ post.id } >
					<Link to={ `/posts/${post.id}` }>
						{ post.title }
					</Link>
				</li>
			);
		});
	}

	render() {
		// to property in Link is the new route to link to
		// This differs from anchor tag by not allowing page to init another http request
		return (
			<div>
				<div className='text-xs-right'>
					<Link className='btn btn-primary' to='/posts/new'>
						Add a Post
					</Link>
				</div>

				<h3>Posts</h3>
				<ul className='list-group'>
					{ this.renderPosts() }
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts : state.posts }
}

// Action creator to reach out to actions/index.js and retrieve the posts
export default connect( mapStateToProps, { fetchPosts : fetchPosts } )(PostsIndex);