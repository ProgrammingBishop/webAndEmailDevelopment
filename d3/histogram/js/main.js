/*
	VIEW D3 LOCALLY

	Within terminal cd into directory with index.html
	Within terminal type: python -m http.server
	Visit URL that the above command returns (http://0.0.0.0:8000/)
*/


// Set margins of canvas
var margin = { top : 100, bottom : 175, left : 100, right : 100 };


// Subtract margins so plot is bounded by margins specified
var width  = 800 - margin.left - margin.right;
var height = 600 - margin.top  - margin.bottom;


// Boolean to dictate which data set is being previewed
var flag = true;


// Transition var for scalability
	var t = d3.transition().duration(750);


// Create canvas in HTML by inserting an '<svg>' tag
var svg = d3.select('#chart-area')
	.append("svg")
		// Add margins back to be sure the canvas includes the margins specified
		.attr("width",  width  + margin.left + margin.right)
		.attr("height", height + margin.top  + margin.bottom);


// Position plot on page via a '<g>' tag
var g = svg.append("g")
	.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");


// Add the x axis to plot
var xAxisGroup = g.append('g')
	.attr('class', 'x axis')
	.attr('transform', 'translate(0,' + height + ')')


// Add the y axis to plot
var yAxisGroup = g.append('g')
	.attr('class', 'y axis')


// Band scale to position x-coord (will rescale with more data items)
var x = d3.scaleBand()
	.range([0, width])
	.paddingInner(0.2)
	.paddingOuter(0.2);


// Linear scale to position y-coord (will rescale should a new max be added)
var y = d3.scaleLinear()
	.range([height, 0]);


// Tick marks to x-coord
var xAxisCall = d3.axisBottom(x);


// Add x-coord text
g.append("text")
	.attr("class", "x-axis label")
	.attr("x", width / 2)
	.attr("y", height + 75)
	.attr("font-size", "20px")
	.attr("text-anchor", "middle")
	.text("Month");


// Add y-coord text
var yLabel = g.append("text")
	.attr("class", "y-axis label")
	.attr("x", - (height / 2))
	.attr("y", -75)
	.attr("font-size", "20px")
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Revenue");


// Load data
d3.json('data/revenues.json').then(function(data) {


	// Type coerce number strings into integers
	data.forEach(function(d) {
		d.revenue = +d.revenue;
		d.profit  = +d.profit;
	});


	// Will update the axis every second should changes occur
	d3.interval(function() {
		var newData = flag ? data : data.slice(1);
		update(newData);
		flag = !flag;
	}, 1000);


	// Set up the axis when the page loads
	update(data);


// Print errors to the console
}).catch(function(error) {
	console.log(error);
});


// Update the axis of the plot
// If data changes, the plot will update every second to display any changes
function update(data) {
	// Every second, toggle flag to display the other dataset
	var value = flag ? 'revenue' : 'profit';

	// .map() will return all the x label items to serve as number of bins
	x.domain(data.map(function(d) { 
		return d.month; 
	}));


	// Max will set the domain of y-coord to be 0 to max value in data
	y.domain([0, d3.max(data, function(d) { 
		return d[value]; 
	})]);

	// x axis plot setup
	var xAxisCall = d3.axisBottom(x);
	xAxisGroup.call(xAxisCall);
 

	// y axis plot setup
	var yAxisCall = d3.axisLeft(y)
		.tickFormat(function(d) { return '$' + d; });
	yAxisGroup.transition(t).call(yAxisCall);


	// selectAll() returns 3 objects
	/*
		_enter  = all elements in data array but do not exist on the page (add to screen)
		_exit   = all elements that exist on the page, but do not exist in the data array (remove from screen)
		_groups = all elements that currently exist on the screen
	*/

	// Typical D3 Update Pattern
	/*
		Join   = select all matching elements on the screen with selectAll
		Exit   = remove the elements that don't exist in new data array
		Update = set attributes for existing elements on the screen
		Enter  = set attributes for new items in our data array
	*/

	
	// JOIN new data with old elements
	var rects = g.selectAll('rect')
		// function arg will track new data by month rather than index
		.data(data, function(d) {
			return d.month;
		});


	// EXIT old elements not present in new data
	rects.exit()
		.attr('fill', 'red')
	.transition(t)
		.attr('y', y(0))
		.attr('height', 0)
		.remove();


	// ENTER new elements present in new data
	rects.enter()
		.append('rect')
			// Initializa the ENTER selection
			.attr('x', function(d) { return x(d.month); })
			.attr('width', x.bandwidth)
			.attr('fill', 'grey')
			.attr('y', y(0))
			.attr('height', 0)
			// UPDATE old elements present in new data
			// rects represents the update selection
			.merge(rects)
			.transition(t)
				.attr('x', function(d) { return x(d.month); })
				.attr('width', x.bandwidth)
				.attr('y', function(d) { return y(d[value]); })
				.attr('height', function(d) {return height - y(d[value]); })


	// Toggle y-coord label to match dataset
	var label = flag ? 'Revenue' : 'Profit';
	yLabel.text(label);
				
}