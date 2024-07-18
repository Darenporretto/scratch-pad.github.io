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
//i:array
//O:should retyrn true
//c:typeof can work
//e:n/a
function isArray(value) {
    // YOUR CODE BELOW HERE //
    return Array.isArray(value);
    //use Array.isArray to chec if its an array
    
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
 */
//i:object
//O:should return true
//c:false if not a collection
//e:n/a
function isObject(value) {
    // YOUR CODE BELOW HERE //
    return typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date);
    


    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
//i:array
//O:should return true
//c:must return true if value is an array
//e:n/a
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    return Array.isArray(value) || (typeof value === 'object' && value !== null && !(value instanceof Date));
    //check object or array

    
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
//i:value
//O:this should return a string for the input value
//c:return the value type as a string
//e:n/a
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //check type of value
    if (Array.isArray(value)) {
        return "array";
    } else if (value instanceof Date) { //check if value is an array use instaceof
        return "date";
    } else if (typeof value === "object" && value !== null) {
        return "object";
    } else if (typeof value === "function") { //use typeof
        return "function";
    } else if (value === null) {
        return "null";
    } else if (typeof value === "undefined") {
        return "undefined";
    } else {
        return typeof value;
    }
     
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