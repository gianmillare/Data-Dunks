

function pvp() {

    d3.json("/pvpstats" ).then(function(data) {
        console.log(data);
		
        function tabulate(data, columns) {
  
            var table = d3.select('#stats1').append('table')
            var thead = table.append('thead')
            var	tbody = table.append('tbody');
    
            // append the header row
            thead.append('tr')
              .selectAll('th')
              .data(columns)
              .enter()
              .append('th')
              .text(function (column) { return column; });
    
            // create a row for each object in the data
            var rows = tbody.selectAll('tr')
              .data(data[0].data)
              .enter()
              .append('tr');
    
            // create a cell in each row for each column
            var cells = rows.selectAll('td')
              .data(function (row,i) {return row; })
              .enter()
              .append('td')
              .text(function (d) { return d; });
    
          return table;
        }
    
        // render the table(s)
         tabulate(data[0], data[0].index); // data, columns table 
                
        

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