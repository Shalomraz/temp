var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];


function buildTable(data) {
  // Create a "table" element
  var table = document.createElement("table");

  // Create a "tr" element under "table" element
  var tr = document.createElement("tr");
  table.appendChild(tr);

  // Read the MOUNTAINS object properties in the first row and
  // put them inside a "th" element under "tr" element
  for (var property in data[0]) {
    var th = document.createElement("th");
    th.textContent = property;
    tr.appendChild(th);
  }
  
  // Create the table rows and implement their values
  for (var i = 0; i < data.length; i++) { 
    var tr = document.createElement("tr");
    table.appendChild(tr);
    
    // For each "tr" element create the "td" elements and
    // insert the values from the MOUNTAINS object
    for (var value in data[i]) {      
      var td = document.createElement("td");
      td.textContent = data[i][value];
      tr.appendChild(td);

      // Align the "height" header cells values to the right
      if (!isNaN(data[i][value])) {
        td.style.textAlign = "right";
      }
    }
  }
  
  return table;
}

document.body.appendChild(buildTable(MOUNTAINS));
