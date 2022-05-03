const canvas = document.getElementById("pixelCanvas"); 
const sizePicker = document.getElementById("sizePicker");
const button = document.getElementById("submit")


function makeGrid() {
    // While loop to reset the table
    let firstChild = canvas.firstChild; 
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    // Code to populate the table
    let yAxis = document.getElementById("inputHeight").value;
    let xAxis = document.getElementById("inputWidth").value;
    // Create the table rows
    for (let y = 1; y <= yAxis; y++) {
        let row = document.createElement('tr');
        canvas.appendChild(row);
        // Create the cells for each row
        for (let x = 1; x <= xAxis; x++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
            // In case you need to put a div in each cell ...
            // let pixel = document.createElement('div');
            // cell.appendChild(pixel);
        }
    }
}
 
document.getElementById("sizePicker").addEventListener("submit", function(grid) {
    grid.preventDefault();
    makeGrid();
  });