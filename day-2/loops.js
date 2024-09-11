// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
/*
I: function takes an input array
O: returns its values
C: use console.log
E: n/a
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // loop over array usinf a for loop
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/*
I: inout an array
O: looped backwards array
C: use the console
E: n/a
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // loop backwards through array
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: an object
O: an array containing the object jeys
C: n/a
E: n/a
*/
function getObjectKeys(object) {
  // return array of objects keys
  // YOUR CODE BELOW HERE //
  return Object.keys(object) ;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/*
I: function takes in an object
O: print its keys
C: use the console
E: n/a
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // loop over each key in object
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(key);
    }
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: function takes in an object
O: returns array wth objects values
C: n/a
E: n/a
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //return the array with the objects values
  return Object.values(object);
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
/*
I: function takes in an object
O: loop over and print values
C:use the console
E: n/a
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // loop over each object key
  for ( let key in object) {
    // check the key is its own prropert of object
    if (object.hasOwnProperty(key)) {
      // log to the console
      console.log(object[key]);
    }
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: function takes in an object
O: return the number of key/value pairs stored within that Object
C: n/a
E: n/a
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // return the number of keys in object
  return Object.keys(object).length;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/*
I: function takes in an object
O: loop over the Object IN REVERSE and print its values
C: print to the console
E: n/a
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //use objects keys in array and reverse it
  var keys = Object.keys(object).reverse();

  // loop over reversd keys and print to console
  keys.forEach(key => {
    console.log(object[key]);
  });
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}