// Boilerplate Libraries
import React             from 'react';
import ReactDOM          from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Import Components
import App from './components/app.js';


// React View for HTML
ReactDOM.render(

	<BrowserRouter>
		<App />
	</BrowserRouter>, 
	
	document.querySelector('#app')

);