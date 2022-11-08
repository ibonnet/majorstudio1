/*global d3 */

// set the dimensions and margins of the graph

  var margin = {top: 40, right: 30, bottom: 70, left: 60},
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page

  var chart1 = d3.select("#NeighborhoodsDestroyed")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
  
  // Parse the Data
  d3.csv("NeighborhoodsDestroyed.csv", function(data) {
  
  // X axis
  var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.Year; }))
    .padding(0.2);
  chart1.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");
  
  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 7])
    .range([ height, 0]);
  chart1.append("g")
    .call(d3.axisLeft(y));
  
  // Bars
  chart1.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.Year); })
      .attr("y", function(d) { return y(d.Value); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.Value); })
      .attr("fill", "#C7988C")
  
  })
  
 chart1.append("text")
   .attr("transform", "translate(105,-75)")
   .attr("x", 50)
   .attr("y", 50)
   .attr("font-size", "15px")
   .text("Neighborhoods destroyed since 2011")