import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';


class PostShow extends Component {
	// Once appears on screen fetch the post
	componentDidMount() {
		// params holds all propertied within a URL
		if (!this.props.post) {
			const { id } = this.props.match.params;
			this.props.fetchPost(id);
		}
	}


	onDeleteClick() {
		const { id } = this.props.match.params;

		this.props.deletePost(id, () => {
			this.props.history.push('/');
		});
	}


	render() {
		const { post } = this.props;

		if (!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to='/'>Back to Index</Link>

				<button
					className='btn btn-danger pull-xs-right'
					onClick={ this.onDeleteClick.bind(this) }
				>Delete Post</button>

				<h3>{ post.title }</h3>
				<h6>{ 'Categories:' { post.categories } }</h6>
				<p>{ post.content }</p>
			</div>
		);
	}
}


// mapStateToProps called whenever component is rerendered onto the screen
// ownProps is prop object going to be passed to PostShow component on rerender
function mapStateToProps({ posts }, ownProps) {
	return { post : posts[ ownProps.match.params.id ] };
}


export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);