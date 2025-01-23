// #!/usr/bin/env node

'use strict';

const { keys } = require("lodash");

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
/*
I: Function takes an input array.
O: Prints its values to the console. 
C: Loop forward over the array. 
E:
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // Loop forward and through the array first to last
  for (let i = 0; i < array.length; i++) {
    // Print the elements to the console
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/*
I: Function takes an input array.
O: Prints its values to the console.
C: Loop backwards over the array. 
E:
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // Loop in reverse, start with the last index
  for (let i = array.length - 1; i >=0; i--) {
    // Print to the console backwards
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: Function takes an input object. 
O: Function returns an array with the object keys. 
C:
E:
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // Return an array with the keys of the object
  return Object.keys(object);


  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/*
I: Function takes in an input object. 
O: Function should print its keys using console.log
C: Loop over the object. 
E:
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // Loop over the keys in the object
  for (let key in object) {
    // Print the objects keys using the console
    console.log(key);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: Function takes an input object. 
O: Functiom should return an array with the object's values. 
C:
E:
*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // Return array using Object.value() with the objects values
  return Object.values(object);
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 *//*
I: Function takes in an object. 
O: Prints its values to the console
C: Loop over the object. 
E:
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // Loop through all keys in object
  for (let key in object) {
    // Check that only the objects own prpoperties are printed
    if (object.hasOwnProperty(key)) {
      console.log(object[key]); // Prints value of current property
    }
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: Function takes in an object. 
O: Function returns the number of key/value pairs in an object. 
C:
E:
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  // Return number of key/value pairs in object using Object.keys()
  return Object.keys(object).length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/*
I: Function takes in an object. 
O: Function prints its values in reverse. 
C: Loop over the object in reverse and use the console. 
E:
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  // Use Object.keys() to get the keys and then reverse their order
  const keys = Object.keys(object).reverse();

  // Loop over the reversed keys
  for (let i = 0; i < keys.length; i++) {
    // print the values to the log
    console.log(object[keys[i]]);
  }
  
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