var margin = { top: 10, bottom: 150, left: 60, right: 60 };
var height = 600 - margin.top  - margin.bottom;
var width  = 800 - margin.left - margin.right;


var canvas = d3.select("#chart-area")
    .append("svg")
        .attr("width",  width  + margin.left + margin.right)
        .attr("height", height + margin.top  + margin.bottom);

var hist = canvas.append("g")
    .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");


d3.json("./data/buildings.json").then((data) => {
    data.forEach((d) => {
        d.height = +d.height;
    });


    var x = d3.scaleBand()
        .domain(data.map((d) => {
            return d.name;
        }))
        .range([0, width])
        .paddingInner(0.3)
        .paddingOuter(0.3);

    var y = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => {
            return d.height;
        })])
        .range([height, 0]);


    var xAxisCall = d3.axisBottom(x);

    hist.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0, " + height + ")")
        .call(xAxisCall)
        .selectAll("text")
            .attr("x", -5)
            .attr("y", 10)
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-40)");

    hist.append("g")
        .attr("class", "x-label")
        .attr("font-size", "20px")
        .attr("x", width / 2)
        .attr("y", height + 140)
        .attr("text-anchor", "middle")
        .text("World's Tallest Building");


    var yAxisCall = d3.axisLeft(y)
        .ticks(10)
        .tickFormat((d) => {
            return d + "m";
        });

    hist.append("g")
        .attr("class", "y-axis")
        .call(yAxisCall);

    hist.append("g")
        .attr("class", "y-label")
        .attr("font-size", "20px")
        .attr("x", -(height / 2))
        .attr("y", -60)
        .attr("text-anchor", "middle")
        .attr("tranform", "rotate(-90)")
        .text("Height (m)");


    var bars = hist.selectAll("rect")
        .data(data);

    bars.enter()
        .append("rect")
            .attr("width", x.bandwidth)
            .attr("height", (d) => {
                return height - y(d.height)
            })
            .attr("x", (d) => {
                return x(d.name);
            })
            .attr("y", (d) => {
                return y(d.height);
            })
            .attr("fill", "grey");


    bars.exit().remove();

}).catch((error) => {
    console.log(error);
});