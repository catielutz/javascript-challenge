// from data.js
var ufoData = data;

// create reference to table, button, and datetime input
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// input data into index.html
function addData(dataInput) {
    dataInput.forEach(ufoSighting => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSighting[column])
        );
    });
};

addData(ufoData);

// create event listener
button.on("click", () => {
    // prevent page from refreshing
    d3.event.preventDefault();

    var inputValue = inputDate.property("value");
    var filterDate = ufoData.filter(userDate => userDate.datetime === inputValue);

    // console.log(filterDate);

    tbody.html("");
    
    var userInput = {
        filterDate
    }

    if(userInput.filterDate.length !== 0) {
        addData(filterDate);
    }

        else {
            tbody.append("tr").append("td").text("Nothing to see here. Move it along, weirdos...");
    }
});
