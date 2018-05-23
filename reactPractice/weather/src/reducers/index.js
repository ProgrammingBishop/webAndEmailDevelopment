import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
	// Set the weather reducer to contain output of reducer_weather.js returned state
 	weather : WeatherReducer
});

export default rootReducer;
