// Boilerplate Libraries
import React, { Component } from 'react';
import        { Link }      from 'react-router-dom';


export default class MerchantNavigation extends Component {

	render() {
		return (
			<nav className='navbar'>
				<ul className='nav justify-content-between'>
					<li className='nav-item'>
						<Link className="nav-link" to='/belethorGeneralGoods'>Belethor's General Goods</Link>
					</li>

	                <li className='nav-item'>
	                	<Link className="nav-link" to='/theScorchedHammer'>The Scorched Hammer</Link>
	                </li>

	                <li className='nav-item'>
	                	<Link className="nav-link" to='/elgrimsElixirs'>Elgrim's Elixirs</Link>
	                </li>

	                <li className='nav-item'>
	                	<Link className="nav-link" to='/theFrozenHearth'>The Frozen Hearth</Link>
	                </li>
				</ul>
            </nav>
		);
	}

}