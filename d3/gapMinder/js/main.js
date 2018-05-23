/*
VIEW D3 LOCALLY
Within terminal cd into directory with index.html
Within terminal type: python -m http.server
Visit URL that the above command returns (http://0.0.0.0:8000/)
*/


// Set canvas margins
var margin = { top : 100, bottom : 100, left : 100, right : 100 };


// Add margins around canvas
var width  = 1000 - margin.left - margin.right;
var height =  800 - margin.top - margin.bottom;


// Add canvas
var svg = d3.select('chart__area')
	.append('svg')
		// Add margins around canvas
		.attr('width',  width  + margin.left + margin.right)
		.attr('height', height + margin.top  + margin.bottom);


// Center canvas on page
var g = svg.append("g")
	.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");


// Load in Data
d3.json("data/data.json").then(function(data) {
	
	// Filter out data points containing null values
	filtered = filterData(data);
	console.log(filtered);


}).catch(function(error) {
	console.log(error);
});


// Filter null data points
function filterData(data) {
	// For each year
	$.each(data, function(k, v) {
		var country = data[k].countries;
		
		// For country for current year
		$.each(country, function(k, v) {

			// Remove data point if null values present
			if ( country[k].income === null || country[k].life_exp === null ) {
				delete country[k]; 
			}
		});
	});

	return data;
}