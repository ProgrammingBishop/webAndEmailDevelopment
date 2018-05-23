import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	// map executes a funtion for every element in an array
	const VideoItems = props.videos.map( (video) => {
		// etag is unique id key for each React list item
			// Parameters generate members to the passed props arg into VideoListItem
		return (
			// Param from App call to Video List passes to Video List Item (parent passing state down to children)
			<VideoListItem 
				onVideoSelect = { props.onVideoSelect }
				key={ video.etag }  
				video={ video } />
		);
	} );

	return (
		// to set class on DOM el to be inserted, use className instead of class
			// loop over video list to display video items
			// always ref JS variables in JSX within '{}'
		// When React builds a list, it needs an ID so it can ref object to change/update
		<ul className="col-md-4 list-group">
			{ VideoItems }
		</ul>
	);
};

export default VideoList;