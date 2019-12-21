var url = "/tvtstats";

var barDiv = document.getElementById('tvt_chart');

var traceA = {
	x: ["Allen Iverson", "Derrick Rose", "Kevin Garnett", 
	"Stephen Curry", "Steve Nash", "Ray Allen", "Jason Kidd",
	"Larry Bird", "Charles Barkley", "Michael Jordan"],
	y: ["4.8", "5.9", "9.9", "12.5", "3.8", "6.4", "6.9",
	"9.2", "9.9", "12.6"],
	type: 'bar'
};

var data = [traceA];

var layout = {
	title: "Testing"
};

Plotly.newPlot(barDiv, data, layout);
