

function pvp() {

    
    d3.json('/pvpstats').then(function (json) {
        console.log(json);

        var thead = d3.select("thead").selectAll("th")
        .data(d3.keys(data[0]))
        .enter().append("th").text(function(d){return d});
        // fill the table
        // create rows
        var tr = d3.select("tbody").selectAll("tr")
        .data(data).enter().append("tr")
        // cells
        var td = tr.selectAll("td")
          .data(function(d){return d3.values(d)})
          .enter().append("td")
          .text(function(d) {return d})// 2 column table
    
    });


}
// <th>${d.index[13]}</th><th>${d.index[28]}</th><th>${d.index[32]}</th><th>${d.index[34]}</th><th>${d.index[49]}</th>
                // BPM(12), DBPM(13), OBPM(28), PER(32), PTS(34), EFG%(49)








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