import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';


const rootReducer = combineReducers({
	// key is the state
	// value is the actual reducer
	books : BooksReducer,
	activeBook : ActiveBook
});


export default rootReducer;