import React from 'react';

// props members are received as an argument from VideoItems return
const VideoListItem = ({video, onVideoSelect}) => {
	// const Video = props.video; instead use {video} to target argument member directly

	// Use YouTube API to access video content
	const imageURL = video.snippet.thumbnails.default.url;

	return (
		// From Video List, create event handler that says:
			// whenever clicked, update the state to the value of selected child's video value
		<li className='list-group-item' onClick={ () => onVideoSelect(video) }>
			<div className='video-list media'>
				<div className='media-left'>
					<img className='media-object' src={ imageURL } />
				</div>

				<div className='media-body'>
					<div className='media-heading'>
						{ video.snippet.title }
					</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;