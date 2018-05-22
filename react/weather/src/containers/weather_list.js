import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';



class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		// Access the list column in city data 
			// and for each row of this list, add value to list
			// Will have an array of all temps for chicago
		const temps = cityData.list.map( weather => weather.main.temp );
		const pressures = cityData.list.map( weather => weather.main.pressure );
		const humidities = cityData.list.map( weather => weather.main.humidity );
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;

		return (
			// Every React list item needs a unique key
			// Create Chart component so we can recycle code
			<tr key={ name }>
				<td>
					<GoogleMap lon={ lon } lat={ lat } />
				</td>

				<td><Chart data={ temps } color='blue' units='K' /></td>
				<td><Chart data={ pressures } color='green' units='hPA' /></td>
				<td><Chart data={ humidities } color='orange' units='%' /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (HPA)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>

				<tbody>
					{ this.props.weather.map(this.renderWeather) }
				</tbody>
			</table>
		);
	}
}


function mapStateToProps({weather}) {
	return { weather : weather };
}


export default connect(mapStateToProps)(WeatherList);