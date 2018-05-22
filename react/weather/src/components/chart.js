import React from 'react';
// Import needed functions from sparklines plugin
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';


// Calculate the Average
function average(data) {
	return _.round(_.sum(data) / data.length);
}


export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={ props.data }>
				<SparklinesLine color={ props.color } />
				<SparklinesReferenceLine type='avg' />
			</Sparklines>

			<div>
				{ average(props.data) } { props.units }
			</div>
		</div>
	);
}