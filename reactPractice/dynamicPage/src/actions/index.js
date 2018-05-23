// action creator is a function that returns an action, which is a JS object
export function selectBook(book) {
	// selectBook is ActionCreator, it needs to return an action; object with a type property 
	return {
		// Type is always uppercase underscore seperated and required
		type : 'BOOK_SELECTED',
		// Data to be passed with the action
		payload : book
	};
}