
  // Implementation of makeBody() //

(function(window, _) {
    window.game78 = window.game78 || {
      numz: {/* other code */
      /**
       * Returns the angle measurement formed by two lines in degrees
       * 
       * @param {Object} pointA: The first point that forms the angle
       * @param {Object} pointB: The second point that forms the angle
       */
      getAngleDegrees(pointA, pointB){
        const DistanceX = Math.abs(pointB.x - pointA.x);
        const DistanceY = Math.abs(pointB.y - pointA.y);
        const radians = Math.atan2(DistanceY, DistanceX);
        const degrees = radians*180/Math.PI;
        return degrees;
      },
      /**
       * 
       * @param {Num} degrees: The angle in degrees 
       * @returns The angle in radians
       */
      degreesToRadians(degrees){
        return degrees * Math.PI / 180;
      },
      /**
       * @param {Num} radians: The angle in radians
       * @returns The angle in degrees
       */
      radiansToDegrees(radians){
        return radians * 180 / Math.PI;
      }

    },
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
        },
        /**
            * Updates the diagonal velocity properties of a body,
            * taking into account the body's current velocity 
            * and applying any forces acting against the body
            * as acceleration on both the x and y axis.
            * 
           * NOTE: This method DOES NOT update the position of 
           * the body, it only updates its velocity.
            * 
            * @param {Object} body: The body must be an Object 
            * with velocityX, velocityY and rotation properties. 
            * @param {Number} forceOnX: The force acting against
           * the body on the x axis.
            * @param {Number} forceOnY: The force acting against
            * the body on the y axis.
            */
            updateVelocity(body, forceOnX, forceOnY) {
            const
              angle = body.rotation * Math.PI / 180,
             accelerationOnX  = Math.cos(angle) * forceOnX,
              accelerationOnY = Math.sin(angle) * forceOnY;
              body.velocityX += accelerationOnX;
             body.velocityY += accelerationOnY;
              },
              /**
 * Updates the x and y properties of a body based on its
 * velocityX and velocityY, and, updates the rotation of
 * a body based on its rotationalVelocity.
 *
 * @param {Object} body: The body must be an Object 
 * with x, y, rotation, velocityX, velocityY, and 
 * rotationalVelocity properties.
 */
updatePosition(body) {
  body.x += body.velocityX;
  body.y += body.velocityY;
  body.rotation += body.rotationalVelocity;
},
      },
    };
  }(window, window._));