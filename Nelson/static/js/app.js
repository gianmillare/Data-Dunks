function buildPlot() {
	console.log('hello');
	var url = "/pvpstats";
	d3.json(url, function(info) {
		console.log(info);

		const names = info[1];
		console.log(names);
	});
};
buildPlot();





// function buildPlot() {
// 	var url = "/pvpstats";
// 	d3.json(url).then(function(response) {

// 		var barDiv = document.getElementById('pvp_chart');

// 		var traceA = {
// 			x: response.index,
// 			y: response.data[0],
// 			type: 'bar'
// 		};

// 		var data = [traceA];

// 		var layout= {
// 			title: "Player's Stats",
// 		};
// 		Plotly.newPlot(barDiv, data, layout);
// 	});
// };






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