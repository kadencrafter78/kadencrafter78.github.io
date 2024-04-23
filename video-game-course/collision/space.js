(function(window, opspark, racket, game78) {
  /**
   * Creates and returns the space module. Listens for SPAWN 
   * events, adding any bodies in the event
   * @param {Object} messenger: The system wide event dispatcher.
   */
  opspark.space = function(messenger) {
    // holds all bodies active in our space //
    const 
      dampeningForce = 0.08,
      active = [];

    messenger.on('SPAWN', onSpawn);
    function onSpawn(event) {
      add(...event.bodies);
    }
    
    function add(...bodies) {
      active.push(...bodies);
      return this;
    }

    function remove(body) {
      return active.splice(active.indexOf(body), 1)[0];
    }

    return {
      add,
      remove,
      destroy() {
        messenger.off('SPAWN', onSpawn);
      },
      update(event) {
        active.forEach(body => {
          // ask the body to update its velocity //
          body.update(event);
          
          // update the body's position based on its new velocity //
          racket.physikz.updatePosition(body);
        });

        // loop backwards over each body in the space: note i > 0 //
        for (let i = active.length - 1; i > 0; i--) {
          // pull out each body one by one //
          const bodyA = active[i];

          // compare all other bodies to bodyA, excluding bodyA: note j > -1 //
          hit: for (let j = i - 1; j > -1; j--) {
            const bodyB = active[j];
            
            // TODO 1: Calculate hit test components
            let realDistance = game78.phyz.calculateDistance(bodyA, bodyB);
            const minDistance = bodyA.radius + bodyB.radius;
            
              
            // TODO 2: Do collision check: how do we know if bodies are colliding?
            if(realDistance <= minDistance) {
              console.log('hit!');
              
              // TODO 3: Calculate springToX and springToY 
              let angle = game78.numz.getAngleDegrees(bodyA, bodyB);
              let springToX = bodyA.x + (minDistance * Math.cos(angle));
              let springToY = bodyA.y + (minDistance * Math.sin(angle));
              
                
              // TODO 4: Calculate acceleration to spring-to point, factor in dampeningForce
              var accelerationOnX = dampeningForce*(springToX - bodyB.x);
              var accelerationOnY = dampeningForce*(springToY - bodyB.y);
              
              
              // TODO 5: Apply acceleration to bodyB
              bodyA.velocityX += accelerationOnX;
              bodyA.velocityY += accelerationOnY;
              
              
              // TODO 6: Apply inverse acceleration to bodyA
              bodyB.velocityX -= accelerationOnX;
              bodyB.velocityY -= accelarationOnY;
              
              
            }
          }
        }
      }
    };
  };
}(window, window.opspark, window.opspark.racket, window.game78));
