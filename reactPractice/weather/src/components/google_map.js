import React, { Component } from 'react';


class GoogleMap extends Component {
	// Automatically called when component is rendered to the screen
	componentDidMount() {
		// Embeds a Google map into document
			// Param this.refs.map is a ref to an HTML node to render map to
			// Options object is the second param to present the map
		new google.maps.Map(this.refs.map, {
			zoom : 12,
			center : { 
				// lat and lon property from the info received from AJAX GET request
				lat : this.props.lat,
				lng : this.props.lon
			}
		});
	}

	render() {
		return (
			// ref in React gets reference to HTML element rendered to page
			// Anything that declares this.refs.map gets access to the below reference
			<div ref='map' />
		);
	}
}


export default GoogleMap;