// Import action type
import { FETCH_WEATHER } from '../actions/index';


// Reducers always get a state and action argument
	// state default to initial state for initial application render
export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
			// Never mutate existing data
			// concat new data into prexisting data via concat
			return [ action.payload.data, ...state ];
	}

	return state;
}