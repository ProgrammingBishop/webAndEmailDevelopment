// Imports are from Node Modules

import _ from 'lodash';

// Create and manage components
import React, { Component } from 'react';
// Render to DOM
import ReactDom from 'react-dom';
// Access YouTube API
import YTSearch from 'youtube-api-search';

// import SearchBar from exported componenet (relative path from index.js)
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// YouTube API Key
const API_KEY =  '...';

// Create new comp to produce HTML
	// Create instances (factory)
	// => is ES6 equivelant to function()
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos : [],
			selectedVideo : null 
		};

		this.videoSearch('blizzard games')

	}

	// Takes search term and passes into search bar below 
	// to create a new property onSearchTermChange
	videoSearch(term) {
		YTSearch( { key : API_KEY, term : term}, (videos) => {
			this.setState( { 
				videos : videos,
				selectedVideo : videos[0]
			} );
		});
	}

	// Render SearchBar component within App Component
	render() {
		// Rerender a new search once every 300ms
		const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300 );

		return (
			// Pass parent component 'videos' to the child VideoList
				// With each rerender, VideoList will get the value for videos
				// onVideoSelect updates the state with a selected video
					// selected video is defaulted at 0
					// Passed as a property into a video list 
			<div>
				<SearchBar onSearchTermChange={ videoSearch }/>
				<VideoDetail video={ this.state.selectedVideo } />
				<VideoList 
					onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
					videos={ this.state.videos } />
			</div>
		);
	}

}

// Add App component to DOM
	// Arguments: JSX instance <App />, target DOM element to add JSX instance to
ReactDom.render(<App />, document.querySelector('.container'));