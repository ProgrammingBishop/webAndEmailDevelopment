function updateViz(data)
{
    var g = d3.select("#viz");

    var rects = g.selectAll("rect")
        .data(data);

    rects.enter()
        .append("rect")
            .merge(rects)
            .attr("width", 15)
            .attr("height", function(d) {
                return 10 * d;
            })
            .attr("x", function(d, i) {
                return i * 20;
            })
            .attr("y", function(d) {
                return (height / 2.0) - (5.0 * d);
            })
            .attr("tokenid", function(d, i) {
                return d * i * 64;
            })
            .attr("fill", "steelblue ");

    rects.exit().remove();
}