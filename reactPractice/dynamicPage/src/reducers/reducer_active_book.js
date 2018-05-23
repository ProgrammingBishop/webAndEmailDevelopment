// Reducers get a state and action parameter
	// action is what called the reducer
	// state is state reducer is responsible for
		// Same state being updated on every call
// reducer updates the app state through the use of actions
	// actions received from the reducer index.js
export default function(state = null, action) {
	switch(action.type) {
		// Never mutate the state within this module
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;
}