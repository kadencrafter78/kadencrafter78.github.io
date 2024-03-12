
  // Implementation of makeBody() //

(function(window, _) {
    window.game78 = window.game78 || {
      numz: {/* other code */},
      phyz: {
        /**
         * Returns an Object with basic properties utilized in a 
         * 2D physics system. On top of simple physical properties,
         * the body has template methods handleCollision() and update().
         * 
         * @param {String} type: A String, should be unique to your
         * system, representing the type of body.
         * @param {Object} options.
         * @param {Number} options.velocityX: The body's velocity on the x axis.
         * @param {Number} options.velocityY: The body's velocity on the y axis.
         * @param {Number} options.rotationalVelocity: The body's rotational velocity.
         * @param {Number} options.integrity: The body's integrity. 0 means the 
         * body is no longer intact and should explode or break apart, 1 means 
         * the body is fully intact.
         * @param {Number} options.density: The density of the body, can be 
         * used when calculating the force of impact of a collision, which can 
         * then be distributed to affect the kinetic energy of the colliding bodies.
         * @param {Number} options.volatility: The body's volatility, how unstable or
         * explosive it may be. Can be used as a multiplyer when calculating the 
         * force of impact of a collision.
         * @return {Object} The body.
         */
        makeBody: function(type, {
          velocityX = 0,
          velocityY = 0,
          rotationalVelocity = 0,
          integrity = 1,
          density = 1,
          volatility = 0
        } = {}) {
          if (type === undefined) throw new Error('You must provide a valid String for the type parameter!');
          return {
            type: type,
            velocityX: velocityX,
            velocityY: velocityY,
            rotationalVelocity: rotationalVelocity,
            integrity: integrity,
            density: density,
            volatility: volatility,
  
            /**
             * @param {Number} A number representing the force of the impact.
             * @param {Object} The other body involved in the collision.
             */
            handleCollision(impact, body) {
              // template method //
            },
  
            /**
             * Can be overridden in the concrete body to provide a custom update()
             * method.
             */
            update(event) {
              // template method //
            }
          };
        },
        /**
         * 
         * @param {Object} pointA - A coordinate point
         * @param {number} pointA.x - The x coordinate of point A
         * @param {number} pointA.y - The y coordinate of point A
         * @param {Object} pointB - A second coordinate point
         * @param {number} pointB.x - The x coordinate of point B
         * @param {number} pointB.y - The y coordinate of point B
         * @returns - Distance between the two points calculated with the pythagorean theorem
         */
        calculateDistance: function(pointA, pointB) {
          const distanceX = Math.abs(pointB.x - pointA.x);
          const distanceY = Math.abs(pointB.y - pointA.y);
          const distance = Math.sqrt((distanceX*distanceX)+(distanceY*distanceY));
          return distance;
        }
      },
    };
  }(window, window._));
