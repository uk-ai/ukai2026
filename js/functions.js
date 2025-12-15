function load_file(file_path, div_id){
  $.ajax({
    url: file_path,
    success: function (data){
      var rows = data.split("\n");
      // Create table element
      var table = document.createElement("table");
      var header = table.createTHead();
      var body = table.createTBody();
      // Fill the table
      for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].split(",");
        if (cells.length > 1) {
          if (i == 0){
            var row = header.insertRow(0);
            for (var j = 0; j < cells.length; j++) {
              var cell = row.insertCell(-1);
              cell.innerHTML = "<b>" + cells[j] + "</b>";
            }
          } else{
            var row = body.insertRow(-1);
            for (var j = 0; j < cells.length; j++) {
              var cell = row.insertCell(-1);
              if (cells[j].includes(" Day ")){
                 cell.innerHTML = "<b>" + cells[j] + "</b>";
              }else{
                 cell.innerHTML = cells[j];
              }
            }
          }
        }
      }
      // Add table to div
      var dvCSV = document.getElementById(div_id);
      dvCSV.innerHTML = "";
      dvCSV.appendChild(table);
    }
  });
}
