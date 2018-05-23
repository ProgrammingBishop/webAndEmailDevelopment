// Boilerplate Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Component Import
import Traveler from './components/traveler';
import Merchant from './components/merchant';


ReactDOM.render(
	<section className='container'>
		<div className='row'>

		{ /* The Traveler */ }
			<div className='col-6'>
				<Traveler />
			</div>
		{ /* End The Traveler */ }


		{ /* The Merchant */ }
			<div className='col-6'>
				<Merchant />
			</div>
		{ /* End The Merchant */ }
		
		</div>
	</section>, 
	
	document.querySelector('#app')
);