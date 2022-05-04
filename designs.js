const canvas = document.getElementById("pixelCanvas"); 
const sizePicker = document.getElementById("sizePicker");
const button = document.getElementById("submit");

/** 
 * @desc Code to select and store color
 * followed by function to update color upon user selection
 * */ 
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

function updateAll(event) {
    document.querySelectorAll("td").forEach(function(p) {
      p.style.color = event.target.value;
    });
  }

/**
  * @desc create a grid of squares 
  * @param int $width - number of squares representing the width of the grid
  * @param int $height - number of squares representing the height of the grid
  * initialized with a while loop to reset the table
  * for loops to populate the rows and columns, to then make individual cells for pixels
  * event listener added to cells to add color on mousedown
*/
function makeGrid() {
    let firstChild = canvas.firstChild; 
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    let yAxis = document.getElementById("inputHeight").value;
    let xAxis = document.getElementById("inputWidth").value;
    for (let y = 1; y <= yAxis; y++) {
        let row = document.createElement('tr');
        canvas.appendChild(row);
        for (let x = 1; x <= xAxis; x++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
            cell.addEventListener('mousedown', function() {
                const userColor = document.getElementById("colorPicker").value;
                this.style.backgroundColor = userColor;
            });  
        }
    }
    
}
/**
 * @desc function ensures "submit" does not refresh page, but populates grid
 * @param sizePicker to determine the size of the grid
 *  */ 
document.getElementById("sizePicker").addEventListener("submit", function(grid) {
    grid.preventDefault();
    makeGrid();
  });

