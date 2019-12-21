

function pvp() {
    var selector = d3.select("#stats1").append("table");
    var thead = table.append("thead");
    var tbody = table.append("tbody");
    d3.json("/pvpstats" ).then(function(data) {
        console.log(data);
		Object.entries(data).forEach(([key, value]) => {
			thead.append("tr")
                .selectAll("th")
                .data(key.index)
                .enter()
                .append("th")
                .text(function(d) { console.log(d);return d; });
		});
    });
    
}









// function buildMetadata(player) {
// 	d3.json(`/pvp.html/${playerone}/${playertwo}`).then((data) => {
// 		var panel = d3.select("#stats1");
// 		panel.html("");
// 		Object.entries(data).forEach(([key, value]) => {
// 			panel.append("h6").text(`${key}: ${value}`);
// 			console.log(key, value);
// 		});
// 	});
// }

// function buildCharts(player) {
// 	d3.json()
// }
// init();