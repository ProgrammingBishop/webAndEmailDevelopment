import React, { Component } from 'react';


export default class MerchantNavigation extends Component {
	render() {
		return (
			<nav className='navbar'>
				<ul className='nav justify-content-between'>
					<li>Belethor's General Goods</li>
	                <li>The Scorched Hammer</li>
	                <li>Elgrim's Elixirs</li>
	                <li>The Frozen Hearth</li>
				</ul>
            </nav>
		);
	}
}