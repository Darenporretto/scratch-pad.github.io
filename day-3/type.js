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
I: function takes in a value
O: return true if the value is an array, false otherwise
C: n/a
E: n/a
*/
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //check to see if the value is an array using Array.isArrray
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
I: function takes in a value
O: return true if the value is an object intended as a collection, false otherwise
C: n/a
E: n/a
*/
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // check if value is of type object and is not null
    //check that it isn't an instance of array or date
    return value !== null
        && typeof value === 'object'
        && !(value instanceof Array)
        && !(value instanceof Date);

    
    
    
    // YOUR CODE ABOVE HERE //
}

isObject({ a: 1, b: 2}); // true
isObject([1, 2, 3]); // false
isObject(null); // false
isObject(new Date()); // false

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/*
I: function takes in a value
O: return true if is either an Array or an an Object intended as a collection, false if otherwise.
C: n/a
E: n/a
*/
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // check if value is array or a plain objectintended as a collection
    return Array.isArray(value) || (
        value !== null &&
        typeof value === 'object' &&
        !(value instanceof Array) &&
        !(value instanceof Date)
    );
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
I: function takes in a value
O: return the type of the value as a String
C: n/a
E: n/a
*/
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (value === null) {
        return 'null';
    }
    if (Array.isArray(value)) {
        return 'array';
    }
    if (value instanceof Date) {
        return 'date';
    }
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