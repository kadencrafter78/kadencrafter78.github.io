/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
    UP: 38,
    LEFT: 37,
    DOWN: 40,
    RIGHT: 39
  }; //Less need for memorization of key codes
  // Game Item Objects
var walkerX = 0;
var walkerY = 0;
var walkerXSpeed = 0;
var walkerYSpeed = 0; // Establishing variables to control walker

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
$(document).on('keyup', handleKeyUp); // Recognizes the key up event so speed can go to zero
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
if (event.which === KEY.UP) {
  console.log("up pressed");
  walkerYSpeed = -5;
}
if (event.which === KEY.DOWN) {
  console.log("down pressed");
  walkerYSpeed = 5;
}
if (event.which === KEY.RIGHT) {
  console.log("right pressed");
  walkerXSpeed = 5;
}
if (event.which === KEY.LEFT) {
  console.log("left pressed");
  walkerXSpeed = -5;
}
  }
  function handleKeyUp (){
    walkerXSpeed = 0;
    walkerYSpeed = 0;
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem(){
    walkerX += walkerXSpeed;
    walkerY += walkerYSpeed;
  }; // Sets walker's new position
  function redrawGameItem(){
    $("#walker").css("left", walkerX);
    $("#walker").css("top", walkerY);
  }; // Actually moves walker on screen
  
}
