const canvas = document.getElementById("pixelCanvas"); 
const sizePicker = document.getElementById("sizePicker");
const button = document.getElementById("submit");

// Code to select and store color
var userColor;
var defaultColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
    userColor = document.querySelector("#colorPicker");
    userColor.value = defaultColor;
    userColor.addEventListener("input", updateFirst, false);
    userColor.addEventListener("change", updateAll, false);
    userColor.select();
  }

function updateFirst(event) {
  var p = document.querySelector("td");

  if (p) {
    p.style.color = event.target.value;
  }
}

// Code to update color
function updateAll(event) {
    document.querySelectorAll("td").forEach(function(p) {
      p.style.color = event.target.value;
    });
  }


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
            // Adds color to cells upon selecting cells
            cell.addEventListener('mousedown', function() {
                const userColor = document.getElementById("colorPicker").value;
                this.style.backgroundColor = userColor;
            });  
        }
    }
    
}
// Function ensures "submit" does not refresh page, but populates grid
document.getElementById("sizePicker").addEventListener("submit", function(grid) {
    grid.preventDefault();
    makeGrid();
  });

