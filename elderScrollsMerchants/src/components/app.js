// Boilerplate Libraries
import React             from 'react';
import { Component }     from 'react';
import { Route, Switch } from 'react-router-dom';

// Component Traveler Import/s
import Traveler from './traveler';

// Component Merchant Import/s (Routing)
import MerchantNavigation    from './merchantNavigation.js';
import BelethorsGeneralGoods from './belethorGeneralGoods.js';
import TheScorchedHammer     from './theScorchedHammer.js';
import ElgrimsElixirs        from './elgrimsElixirs.js';
import TheFrozenHearth       from './theFrozenHearth.js';
import InactiveMerchant      from './inactiveMerchant.js';


export default class App extends Component {
	render() {
		return (
			<section className='container'>
				<div className='row'>
				{ /* Merchant Navigation */ }
					<div className='col-12'>
						<MerchantNavigation />
					</div>
				{ /* End Merchant Navigation  */ }


				{ /* The Traveler */ }
					<div className='col-5'>
						<Traveler />
					</div>
				{ /* End The Traveler */ }


				{ /* Active Merchant */ }
					
					<div className='col-5 offset-2'>
						<Switch>
							<Route path='/belethorGeneralGoods' component={ BelethorsGeneralGoods } />
							<Route path='/theScorchedHammer'    component={ TheScorchedHammer     } />
							<Route path='/elgrimsElixirs'       component={ ElgrimsElixirs        } />
							<Route path='/theFrozenHearth'      component={ TheFrozenHearth       } />
							<Route path='/'                     component={ InactiveMerchant      } />
						</Switch>
					</div>
					
				{ /* End Active Merchant */ }
				
				</div>
			</section>
		);
	}
}