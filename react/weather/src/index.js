import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Import redux-promise middleware
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// Hook redux-promise middleware into application
const createStoreWithMiddleware = applyMiddleware( ReduxPromise )(createStore);

// Renders React application into the specified DOM element
ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>, 
	document.querySelector('.container')
);
