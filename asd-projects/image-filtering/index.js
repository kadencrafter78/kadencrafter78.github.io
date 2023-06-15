// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(decreaseBlue);
  applyFilter(reddify);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(reddify);
  
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
    for (var i = 0; i < image.length; i++){
      for (var j = 0; j < image[i].length; j++){
        var rgbString = image[i][j]; //Accessing the color of the square
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
        image[i][j] = rgbString; //applying the new color to the square
      }
    }
};

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  var background = image[0][0];
  for (var i = 0; i < image.length; i++){
    for (var j = 0; j < image[i].length; j++){
      if (!(image[i][j] == background)){
      var rgbString = image[i][j]; //Accessing the color of the square
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      image[i][j] = rgbString; //applying the new color to the square
    }
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(num){
 return Math.max(Math.min(num, 255), 0);
}

// TODO 3: Create reddify function
function reddify (arr){
  arr[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(arr){
  arr[BLUE] -= 50;
 arr[BLUE] = keepInBounds(arr[BLUE]);
}

function increaseGreenByBlue(arr){
  var x = arr[GREEN] + arr[BLUE];
  arr[GREEN] = keepInBounds(x);
}

// CHALLENGE code goes below here
