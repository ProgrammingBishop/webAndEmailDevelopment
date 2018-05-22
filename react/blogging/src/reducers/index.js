import { combineReducers } from 'redux';
// can rename property for use within the file
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';


const rootReducer = combineReducers({
	posts : PostsReducer,
	// needs to be key of form
	form  : formReducer
});


export default rootReducer;
