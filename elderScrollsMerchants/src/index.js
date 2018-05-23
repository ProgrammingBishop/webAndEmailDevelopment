// Boilerplate Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component Import
import Traveler from './components/traveler';

import MerchantNavigation from './components/merchant_navigation.js';
import BelethorsGeneralGoods from './components/belethorGeneralGoods';
import TheScorchedHammer from './components/theScorchedHammer';
import InactiveMerchant from './components/inactiveMerchant';


ReactDOM.render(
	<section className='container'>
		<div className='row'>
		{ /* Merchant Navigation */ }
			<div className='col-12'>
				<MerchantNavigation />
			</div>
		{ /* End Merchant Navigation  */ }


		{ /* The Traveler */ }
			<div className='col-6'>
				<Traveler />
			</div>
		{ /* End The Traveler */ }


		{ /* Active Merchant */ }
			<BrowserRouter>
				<div className='col-6'>
					<Switch>
						<Route path='/belethorGeneralGoods' component={ BelethorsGeneralGoods } />
						<Route path='/theScorchedHammer'    component={ TheScorchedHammer } />
						<Route path='/'                     component={ InactiveMerchant } />
					</Switch>
				</div>
			</BrowserRouter>
		{ /* End Active Merchant */ }
		
		</div>
	</section>, 
	
	document.querySelector('#app')
);