// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
/*
I: Function takes in a value. 
O: Function should return true if value is an array. 
C:
E:
*/
function isArray(value) {
    // YOUR CODE BELOW HERE //
   
    // Use Array.isArray() method to check if value is an array
    return Array.isArray(value);
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */
/*
I: Function takes in an input of value. 
O: Function should return true if the value is an Object intended as a collection, false if otherwise.
C:
E:
*/
function isObject(value) {
    // YOUR CODE BELOW HERE //

    // Check if value is an object with typeof
    // Check that it is not an array
    // Check that its not a date object using instanceof
    // Check the value is not null
    return typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date);

    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/*
I: Function takes in an input value. 
O: Function should return rue if is either an Array or an an Object intended as a collection, false if otherwise.
C:
E:
*/
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // Check if value is an object or an array
    return Array.isArray(value) || (typeof value === 'object' && value !== null && !(value instanceof Date));
    // Use array is array to check if value is an array
    // Use typeof to check if the value is an object
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
/*
I: Function is given an input of value.
O: Funtion should return the type of the value as a string. 
C:
E:
*/
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // Check for null
    if (value === null) {
        return 'null';
    }

    // Check if value is an array using array is array
    if (Array.isArray(value)) {
        return 'array';
    }

    // Check if value is a date object
    if (value instanceof Date) {
        return 'date';
    }

    // Return using typeof for primitive types and funcs
    return typeof value;
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}