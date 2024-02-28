/*
 * TODO 4: Create a modularized index.js, 
 * pass in window and createjs
 */
(function(window, createjs) {
  // TODO 5: Initialize CreateJS //
  const canvas = document.getElementById('canvas');
  const stage = new createjs.Stage(canvas);

  // TODO 6: Set the framerate of the Ticker
  createjs.Ticker.framerate = 60;


  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY 
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */
  
  // INIT CREATEJS //
  var radius = 25;
  const margin = 125;
  const circleContainer = new createjs.Container();
  const smileContainer = new createjs.Container();

    
  // CREATE A BACKGROUND //
const background = new createjs.Shape();
background.graphics.beginFill('#800085').drawRect(0, 0, canvas.width, canvas.height);
    
  // CREATE A CIRCLE //
  const circle1 = new createjs.Shape();
  const circle2 = new createjs.Shape();
  circle1.graphics.beginFill('#420669').drawCircle(50, 50, radius);
  circle2.graphics.beginFill('#669420').drawCircle(50, 50, radius);
  circle2.x = circle1.x + 160;

// Creating Smile

  const smile1 = new createjs.Shape();
  const smile2 = new createjs.Shape();
  const smile3 = new createjs.Shape();

  smile1.graphics.beginFill('#000000').drawRect(0, 150, 30, 100);
  smile2.graphics.beginFill('#000000').drawRect(170, 150, 30, 100);
  smile3.graphics.beginFill('#000000').drawRect(0, 250, 200, 50);
  smileContainer.x = 50;



  // ADD DISPLAY OBJECTS TO STAGE //
  circleContainer.addChild(circle1, circle2);
  smileContainer.addChild(smile1, smile2, smile3);
  stage.addChild(background, circleContainer, smileContainer);


  // TODO 8: Listen to the 'tick' event  //
  let tickHandler = createjs.Ticker.on('tick', onTick);
  

  // TODO 9: Handle the 'tick' event //
  function onTick(event){
    update(event);
  }
  
//Variables that track movement
  let eyeSpeed = 1;
  let bounds = 20;
  let radiusChange = 1;
  let upperBounds = 2;
  let lowerBounds = 0.8;
  let changeAmount =0.01;

  /*
   * TODO 10: Implement an update Function, after making 
   * changes to assets, it must call stage.update(); 
   */
  function update(event){
    smileContainer.scaleX = radiusChange;
    smileContainer.scaleY = radiusChange;
    circleContainer.scaleX = radiusChange;
    circleContainer.scaleY = radiusChange;
    radiusChange += changeAmount;
    if (radiusChange > upperBounds){
      changeAmount = changeAmount * -1;
    }
    if (radiusChange < lowerBounds){
      changeAmount = changeAmount*-1;
    }
    console.log(radiusChange);
    if (Math.abs(circleContainer.x) >= bounds){
      eyeSpeed = eyeSpeed*-1;
    }
    stage.update();
    //update stage after changing display objects
  }
  

}(window, window.createjs));
