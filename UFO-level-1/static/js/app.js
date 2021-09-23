// from data.js
var tableData = data;

// YOUR CODE HERE!

// Identify the table 
var tbody = d3.select("tbody");

// add data to the table
tableData.forEach((sightings)=> {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key,value])=> {
        var cell = row.append("td");
        cell.text(value)

    });
});

//identify the filter button 
var button = d3.select('#filter-btn');
var form = d3.select("#datetime");

button.on("click", Filtered);
form.on("submit", Filtered);

function Filtered() {
    d3.event.preventDefault();

    var inputdate = d3.select("#datetime");

    var usersinput = inputdate.property("value");

    tbody.html("")

    var filtereddata = tableData.filter(i => {return (i.datetime === usersinput)
    }).forEach((sightings) => {
      var row = tbody.append("tr");
      Object.entries(sightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }
