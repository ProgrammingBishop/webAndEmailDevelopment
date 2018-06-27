function updateViz(data)
{
    var g = d3.select("#viz");

    var circles = g.selectAll("circle")
        .data(data);

    circles.enter()
        .append("circle")
            .merge(circles)
            .attr("cx", function(d) {
                return (width / 2) + d.x;
            })
            .attr("cy", function(d) {
                return (height / 2) + d.y;
            })
            .attr("r", function(d) {
                return (d.r / 2)
            })
            .attr("fill", "green");
    
    circles.exit().remove();
}