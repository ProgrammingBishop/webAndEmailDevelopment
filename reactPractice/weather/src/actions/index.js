// Import axios
import axios from 'axios';

// Weather API key
const API_KEY = 'ad601c0b22b902b4a30b0c4631c4fd15';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


// Reusable variable that can be accessed by other files
// This helps keep actions consistent between action creators and reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';


// Form submission will call this action creator with a city argument
// export so other files can access
	// Access creators need to always return an action
export function fetchWeather(city) {
	// Construct URL with ROOT_URL & the city parameter passed in
	const url = `${ROOT_URL}&q=${city},us`;
	// AJAX GET Request using the unique URL using the axios npm plugin
		// request is a promise object
	const request = axios.get(url);

	// Return action object
		// With the request
		// With the data
	return {
		type : FETCH_WEATHER,
		// Payload key is what is forwarded to the reducers
		// redux-promise will intercept this because it is a promise object
			// Stops action and waits for promise to resolve
			// Sends the requested data to the reducer as the payload
		payload : request
	};
}