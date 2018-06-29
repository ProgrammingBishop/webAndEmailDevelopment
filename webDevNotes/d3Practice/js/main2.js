var margin = { top: 10, bottom:150, left: 100, right: 10 };
var height = 600 - margin.top  - margin.bottom;
var width  = 800 - margin.left - margin.right;


var svg = d3.select("#chart-area")
    .append("svg")
        .attr("width",  width  + margin.right + margin.left)
        .attr("height", height + margin.top   + margin.bottom);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

d3.json("../data/buildings.json").then(function(data) {
    data.forEach(function(d) {
        d.height = +d.height;
    });


    var x = d3.scaleBand()
        .domain(data.map(function(d) {
            return d.name;
        }))
        .range([0, width])
        .paddingInner(0.3)
        .paddingOuter(0.3);

    var xAxisCall = d3.axisBottom(x);

    g.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0, " + height + ")")
        .call(xAxisCall)
        .selectAll("text")
            .attr("x", -5)
            .attr("y", 10)
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-40)");

    g.append("text")
        .attr("class", "x-label")
        .attr("font-size", "20px")
        .attr("x", width / 2)
        .attr("y", height + 140)
        .attr("text-anchor", "middle")
        .text("World's Tallest Buildings");


    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) {
            return d.height;
        })])
        .range([height, 0]);

    var yAxisCall = d3.axisLeft(y)
        .ticks(10)
        .tickFormat(function(d) {
            return d + "m";
        });

    g.append('g')
        .attr('class', 'y-axis')
        .call(yAxisCall);

    g.append("text")
        .attr('class', 'y-label')
        .attr('x', -(height / 2))
        .attr('y', -60)
        .attr('font-size', '20px')
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .text("Height (m)");


    var rects = g.selectAll("rect")
        .data(data)  
        .enter()
        .append("rect")
            .attr("height", (d) => {
                return height - y(d.height);
            })
            .attr("width", x.bandwidth)
            .attr("x", (d) => {
                return x(d.name);
            })
            .attr("y", (d) => {
                return y(d.height);
            })
            .attr("fill", "grey");


}).catch(function(error) {
    console.log(error);
});