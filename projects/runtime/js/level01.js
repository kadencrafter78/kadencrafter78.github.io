var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "drone", "x": 1000, "y": 300},
                { "type": "drone", "x": 1400, "y": 420},
                { "type": "drone", "x": 400, "y": 350},
                { "type": "drone", "x": 1700, "y": 320},
                { "type": "enemy", "x": 400, "y": groundY - 50},
                { "type": "enemy", "x": 1200, "y": groundY - 50},
                { "type": "enemy", "x":1800, "y": groundY - 50},
                { "type": "reward", "x": 1000, "y": groundY - 50},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
       function createSawBlade(x, y){
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone);
var obstacleImage = draw.bitmap("img/sawblade.png");
sawBladeHitZone.addChild(obstacleImage);
obstacleImage.x = -25;
obstacleImage.y = -25;
       }
       function createDrone(x, y){
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var droneHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        droneHitZone.x = x;
droneHitZone.y = y;
game.addGameItem(droneHitZone);
var obstacleImage = draw.bitmap("img/drone.png");
droneHitZone.addChild(obstacleImage);
obstacleImage.x = -25;
obstacleImage.y = -25;
       }
       
       function createEnemy(x,y){
var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 100, "yellow");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
enemy.velocityX = -2;
enemy.rotationalVelocity = 0.1;
enemy.onPlayerCollision = function () {
    game.changeIntegrity(-20);}
enemy.onProjectileCollision = function () {
    game.increaseScore(100);
    enemy.shrink();}
game.addGameItem(enemy);
       }
       
       // Seperating enemies and rewards
       //
       //
       function createReward(x,y){
        var reward = game.createGameItem("reward", 25);
        var greenSquare = draw.rect(100, 100, "green");
        greenSquare.x = -25;
        greenSquare.y = -25;
        reward.addChild(greenSquare);
        reward.x = x;
        reward.y = y;
        reward.velocityX = -2.5;
        reward.onPlayerCollision = function () {
            game.changeIntegrity(30);
            game.increaseScore(100);
            reward.shrink();}
        reward.onProjectileCollision = function () {
            reward.shrink();}
        game.addGameItem(reward);
               }
               
               for (var i = 0; i < levelData.gameItems.length; i++) {
                var eachElement = levelData.gameItems[i];
                var firstX = eachElement.x;
var firstY = eachElement.y;
if (eachElement.type === "drone"){
    createDrone(firstX, firstY);}
    else if (eachElement.type === "enemy"){
        createEnemy(firstX, firstY);
    }
    else if (eachElement.type === "reward"){
        createReward(firstX, firstY);
    }
}

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
