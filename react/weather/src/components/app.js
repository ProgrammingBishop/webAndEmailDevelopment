import React, { Component } from 'react';


// Import the SearchBar class being exported frm the search_bar.js
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'


export default class App extends Component {
  	render() {
    	return (
    		// Add return content from search_bar.js to the main index.html (via root index.js file)
    		<div>
	    		<SearchBar />
	    		<WeatherList />
    		</div>
    	);
  	}
}
