import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';


export default function(state = {}, action) {
	switch(action.type) {
		case DELETE_POST:
			// return state object without a particular state present
			return _.omit(state, action.payload);

		case FETCH_POST:
			// take all posts from the state object and return
			// [] is key interpolation
				// whatever action.payload.data.id is
				// set that ket to the new value to action.payload.data
			return { ...state, [ action.payload.data.id ] : action.payload.data };

		case FETCH_POSTS:
			// This will pull the key 'id' from the payload data and create a new list
				// where this pulled key will be the new key for the post
			return _.mapKeys(action.payload.data, 'id');

		default:
			return state;
	}
}