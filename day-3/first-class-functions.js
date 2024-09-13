// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
   return function(value) {
    return value > base;
   }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
/*
I: function takes in an input base that should be a string or number
O: return a function that tests whether a given value is less than the base
C: return true or false
E: n/a
*/
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value) {
        return value < base;
    } 
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
/*
I: startsWith character, which will be a single character
O: return a Function that tests whether a given String starts with the startsWith character.
C: needs to be case insensitive
E: n/a
*/
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    var toLowerCase = startsWith.toLowerCase();
    // return a function to check if given string stsrts with the char
    return function(str) {
        // change input string to lower case
        return str.toLowerCase().startsWith(toLowerCase);
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    var toLowerCase = endsWith.toLowerCase();
    // return a function to check if given string ends with the char
    return function(str) {
        // change input string to lower case
        return str.toLowerCase().endsWith(toLowerCase);
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
/*
I: Given an Array of Strings and a Function designed to modify a String
O: return the Array of the Strings, modified
C:
E:
*/
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //use map to use on modify function to every string in array
    return strings.map(modify);
    
    
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
/*
I: an Array of Strings and a Test Function
O: return a Boolean on whether it passed, return true if ALL Strings pass the test.
C:
E:
*/
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // the every() method of Array instances tests whether all elements in the array 
    //pass the test implemented by the provided function. 
    // it returns a Boolean value.
    return strings.every(test);
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}