var margin = { top: 50, bottom: 150, left: 150, right: 150 };

var height = 500 - margin.top - margin.bottom;
var width  = 800 - margin.left - margin.right;


var svg = d3.select("#chart-area")
    .append("svg")
        .attr("height", height + margin.top + margin.bottom)
        .attr("width",  width + margin.left + margin.right);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");


d3.json("./data/revenues.json").then(function(data) {
    data.forEach(function(d) {
        d.revenue = +d.revenue;
        d.profit  = +d.profit;
    })


    var x = d3.scaleBand()
        .domain(data.map(function(d) {
            return d.month;
        }))
        .range([0, width])
        .paddingInner(0.3)
        .paddingOuter(0.3);

    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) {
            return d.revenue;
        })])
        .range([height, 0]);


    var xAxisCall = d3.axisBottom(x);
    
    g.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate( 0, " + height + ")")
        .call(xAxisCall)
        .selectAll("text")
            .attr('x', -5)
            .attr('y', 10)
            .attr('text-anchor', 'end')
            .attr('transform', 'rotate(-40)');

    g.append("text")
        .attr('class', 'x-label')
        .attr('x', width / 2)
        .attr('y', height + 60)
        .attr('font-size', '20px')
        .attr('text-anchor', 'middle')
        .text("Month");


    var yAxisCall = d3.axisLeft(y)
        .ticks(10)
        .tickFormat(function(d) {
            return "$" + d;
        });
    
    g.append("g")
        .attr('class', 'y-axis')
        .call(yAxisCall);

    g.append("text")
        .attr('class', 'y-label')
        .attr('x', -(height / 2))
        .attr('y', -60)
        .attr('font-size', '20px')
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .text("Revenue");


    var rects = g.selectAll("rect")
        .data(data);

    rects.enter()
        .append("rect")
            .attr("x", (d) => {
                return x(d.month);
            })
            .attr("y", (d) => {
                return y(d.revenue);
            })
            .attr("width", x.bandwidth)
            .attr("height", (d) => {
                return height - y(d.revenue);
            })
            .attr("fill", "grey");

            
}).catch(function(error) {
    console.log(error);
});