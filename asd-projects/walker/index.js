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
    RIGHT: 39,
    W: 87,
    A: 65,
    S: 83,
    D: 68,
  }; //Less need for memorization of key codes
  // Game Item Objects
  var walker = createWalker("#walker", 0, 0);// Establishing variables to control walker
var runner = createWalker("#runner", 40, 40);

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
    doCollide(walker, runner);
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
if (event.which === KEY.UP) {
  console.log("up pressed");
  walker.ySpeed = -5;
}
if (event.which === KEY.DOWN) {
  console.log("down pressed");
  walker.ySpeed = 5;
}
if (event.which === KEY.RIGHT) {
  console.log("right pressed");
  walker.xSpeed = 5;
}
if (event.which === KEY.LEFT) {
  console.log("left pressed");
  walker.xSpeed = -5;
}
if (event.which === KEY.W) {
  console.log("up pressed");
  runner.ySpeed = -5;
}
if (event.which === KEY.S) {
  console.log("down pressed");
  runner.ySpeed = 5;
}
if (event.which === KEY.D) {
  console.log("right pressed");
  runner.xSpeed = 5;
}
if (event.which === KEY.A) {
  console.log("left pressed");
  runner.xSpeed = -5;
}
  }
  function handleKeyUp (){
    walker.xSpeed = 0;
    walker.ySpeed = 0;
    runner.xSpeed = 0;
    runner.ySpeed = 0;
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
    walker.x += walker.xSpeed;
    walker.y += walker.ySpeed;
    if (walker.x > 390 || walker.x < 0){
      walker.x -= walker.xSpeed;
    }
    if (walker.y > 390 || walker.y < 0){
      walker.y -= walker.ySpeed;
    }
    runner.x += runner.xSpeed;
    runner.y += runner.ySpeed;
    if (runner.x > 390 || runner.x < 0){
      runner.x -= runner.xSpeed;
    }
    if (runner.y > 390 || runner.y < 0){
      runner.y -= runner.ySpeed;
    }
  }; // Sets walker's new position
  function redrawGameItem(){
    $(walker.id).css("left", walker.x);
    $(walker.id).css("top", walker.y);
    $(runner.id).css("left", runner.x);
    $(runner.id).css("top", runner.y);
  }; // Actually moves walker on screen
  function doCollide(obj1, obj2){
    if (obj1.x < obj2.x + 60 && obj1.x > obj2.x && (obj1.y < obj2.y + 60 && obj1.y > obj2.y)){
      console.log(true);
      if (Math.random() * 10 >= 5){
        obj1.x = 390;
        obj1.y = 390;
        $(obj1.id).css('background-color', 'red');
        obj2.x = 0;
        obj2.y = 0;
        $(obj2.id).css('background-color', 'blue')
      }
      else {
        obj2.x = 390;
        obj2.y = 390;
        $(obj2.id).css('background-color', 'red');
        obj1.x = 0;
        obj1.y = 0;
        $(obj1.id).css('background-color', 'blue')
      }
    }
  }
  function createWalker(id, x, y){
    return {
      x: x,
      y: y,
      xSpeed: 0,
      ySpeed: 0,
      id: id,
    }
  }
}
