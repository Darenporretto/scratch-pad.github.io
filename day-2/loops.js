// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
//i:array
//o:should return the arrays values
//c:loop through the array and use the console
//e:n/a
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
   // Loop through the array
   for (let i = 0; i < array.length; i++) {
    // Print each element using console.log
    console.log(array[i]);
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
//i:array
//o:should return the arrays values in reverse order
//c:loop backwards through the array and use the console
//e:n/a
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // Loop backwards through the array
  for (let i = array.length - 1; i >= 0; i--) {
    // Print each element using console.log
    console.log(array[i]);
}
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
//i:array
//o:should return the arrays object keys
//c:return the array containing the object keys
//e:n/a
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // Use Object.keys to get array of keys
  return Object.keys(object);

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
//i:object
//o:returns no value
//c:loop over the object and use the console
//e:n/a
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
     // Loop over the object keys and print them
     for (let key in object) {
      console.log(key);
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
//i:object
//o:return array containing the object values
//c:use object values
//e:n/a
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // Use Object.values to get array of values
  return Object.values(object);

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
//i:object
//o:loop over the object values
//c:use the console
//e:n/a
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // Loop over the object values and print them
   for (let key in object) {
    console.log(object[key]);
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
   // Get array of keys and return its length
   return Object.keys(object).length;

  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
//i:object
//o:function has no return
//c:use .reverse and loops
//e:n/a
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // Get array of keys and reverse it
  let keys = Object.keys(object).reverse();
    
  // Iterate over reversed keys and print corresponding values
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