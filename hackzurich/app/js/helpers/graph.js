
window.graph = function() {

  var margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = 300 - margin.left - margin.right,
      height = 150 - margin.top - margin.bottom;

  var parseDate = d3.time.format("%Y%m%d").parse;

  var x = d3.time.scale()
      .range([0, width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .ticks(4)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .ticks(4)
      .orient("left");

  var line = d3.svg.line()
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.close); });

      console.log(d3.select("#track"));

  var svg = d3.select("#track").append("svg:svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.json("data/data.json", function(error, data) {
    data.forEach(function(d) {
      d.date = parseDate(d.date);
      d.close = +d.close;
    });

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.close; }));

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("CO2 (kg)");

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);
  });

};