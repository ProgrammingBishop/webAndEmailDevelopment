import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Tracks history library and decides actions based on URL changes
// Route decides what components to show based on the URL
// Switch takes collection of different routes
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/post_index';
import PostsNew from './components/posts_new';
import PostShow from './components/posts_show';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


// All routes are added to top level index.js JSX 
ReactDOM.render(
	// If user visits a certain path then show the specific component
	// '/' is the default URL (root URL)
	// Switch returns first route that matches URL so most specific routes at top of list
	// :id is a wildcard, passes valie of :id as prop to PostShow
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path='/posts/new' component={ PostsNew } />
					<Route path='/posts/:id' component={ PostShow } />
					<Route path='/' component={ PostsIndex } />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>, 

	document.querySelector('.container'));