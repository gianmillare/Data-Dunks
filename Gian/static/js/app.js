var url = "/pvpstats";

var barDiv = document.getElementById('pvp_chart');

var traceA = {
	x: ["Russell Westbrook", "James Harden"],
	y: ["15.6", "11.7"],
	type: 'bar'
};

var data = [traceA];

var layout = {
	title: "Testing"
};

Plotly.newPlot(barDiv, data, layout);


























// var svgWidth = 1000;
// var svgHeight = 750;

// var chartMargin = {
// 	top:30,
// 	right: 30,
// 	bottom: 30,
// 	left: 30
// };

// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// var svg = d3.select("#pvp_chart")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);

// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// function buildPlot() {
// 	d3.csv("../../career_best.csv", function(d) {
//   return {
//     year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
//     make: d.BPM,
//     model: d["2P"],
//     length: +d["3P"] // convert "Length" column to number
//   };
// }, function(error, rows) {
//   console.log(rows);
// });
// 	};
// ;
// buildPlot();

// playerz.forEach(function(d) {
// 	d.BPM = +d.BPM;
// });

// var xBandScale = d3.scaleBand()
//     .domain(playerz.map(d => d.Player))
//     .range([0, chartWidth])
//     .padding(0.1);

// var yLinearScale = d3.scaleLinear()
//     .domain([0, d3.max(playerz, d => d.BPM)])
//     .range([chartHeight, 0]);

// var bottomAxis = d3.axisBottom(xBandScale);
// var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

// chartGroup.append("g")
//     .call(leftAxis);

// chartGroup.append("g")
//     .attr("transform", `translate(0, ${chartHeight})`)
//     .call(bottomAxis);

// chartGroup.selectAll(".bar")
//     .data(tvData)
//     .enter()
//     .append("rect")
//     .attr("class", "bar")
//     .attr("x", d => xBandScale(d.Player))
//     .attr("y", d => yLinearScale(d.BPM))
//     .attr("width", xBandScale.bandwidth())
//     .attr("height", d => chartHeight - yLinearScale(d.BPM));
// });








// d3.json(url, function(info) {
// 		console.log(info);

// 		const names = info[0][3];
// 		console.log(names);





// function buildPlot() {
// 	console.log('hello');
// 	var url = "/pvpstats";
// 	d3.json(url, function(info) {
// 		console.log(info);

// 		const names = info[0][3];
// 		console.log(names);
// 	});
// };
// buildPlot();





// // Testing Testin 123
// var barDiv = document.getElementById('pvp_chart');

// var traceA = {
// 	x: ["jason", "emily", "nico", "rebecca"],
// 	y: [3, 5, 192, 5],
// 	type: 'bar'
// };

// var data = [traceA];

// var layout = {
// 	title: "testing"
// };
// Plotly.newPlot(barDiv, data, layout);