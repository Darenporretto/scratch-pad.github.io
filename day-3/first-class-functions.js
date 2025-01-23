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
/*
I: Function takes in an input base.  
O: Function should return a function that tests whether a given value is greater than the base. 
C:
E:
*/
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
   // Return a function that tests the value to the base
   return function(value){
    // Return true if value is > base
    return value > base;
   };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
/*
I: Function takes in an input base that could be a string or a number. 
O: Function returns a function that tests if given value is less than the base. 
C:
E:
*/
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
  // Return a new function that checks if given value is less than base
  return function(value) {
    // Return true if yes
    return value < base;
  };
    
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
I: Function takes in a statsWith character, which will be a single character. 
O: Function shouold return a function that tests whether a given String starts with the startsWith character.
C: Function needs to be case insensitive. 
E:
*/
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    // Convert to lower case for case insensitivity
    const lowerCase = startsWith.toLowerCase();

    // Return a functionchecking if string starts with  StartsWith case insensitive character
    return function(string) {
        return string.toLowerCase().startsWith(lowerCase);
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
/*
I: Function takes in a endsWith character, which will be a single character. 
O: Function shouold return a function that tests whether a given String starts with the endsWith character.
C: Function needs to be case insensitive. 
E:
*/
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    // Convert to lower case for case insensitivity
    const lowerCaseEnd = endsWith.toLowerCase();

    // Return function checks if string  ennd with the given  case insensitive endsWith character
    return function(string) {
        return string.toLowerCase().endsWith(lowerCaseEnd);
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
I: Function takes in an array of strings and a function to modify a string. 
O: Function should return the array of modified strings. 
C:
E:
*/
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // Initialize empty array to hold the modified string
    let output = [];
    
    // Loop through the array of strings
    for (let i = 0; i < strings.length; i++) {
        // Use the push method to modify stringd result to the output
        output.push(modify(strings[i]));
    }

    // Return modified strings array
    return output;
    
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
I: Function takes in an Array of Strings and a Function designed to test the String
O: Function should return a Boolean on whether it passed, return true if ALL Strings pass the test.
C: Loop over the strings and pass them to the test. 
E:
*/
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    // Loop through array of strings
    for (let i = 0; i < strings.length; i++) {
        // If the string will not pass all tests return false
        if (!test(strings[i])) {
            return false;
        }
    }
    // If the strings pass all tests return true
    return true;
    
    
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