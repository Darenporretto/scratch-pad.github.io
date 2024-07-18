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
i:
o:
c:
e:n/a
*/
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //inner function that will be returned
    return function(value) {
        return value > base;
    }; 
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 */
/*
i:
o:
c:
e:n/a
*/
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //function that will be returned
    return function(value) {
        //cmpare value with base and return true or false
        return value < base;
    };
    
   
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
/*
i:
o:
c:
e:n/a
*/
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    if (typeof startsWith !== 'string' || startsWith.length !== 1) {
        throw new Error('startsWith must be a single character string.');
    }

    //return filter function
    return function(str) {
        //check if str starts with startsWith character
        return str.charAt(0).toLowerCase() === startsWith.toLowerCase();
    };

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
/*
i:
o:
c:
e:n/a
*/
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    if (typeof endsWith !== 'string' || endsWith.length !== 1) {
        throw new Error('endsWith must be a single character string.');
    }

    //return the filter function
    return function(str) {
        //if str ends with endsWith character
        return str.charAt(str.length - 1).toLowerCase() === endsWith.toLowerCase();
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
i:
o:
c:
e:n/a
*/
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    var modifiedStrings = [];
    
    // Loop through each string in the input array
    for (var i = 0; i < strings.length; i++) {
        //use modify function to the current string and store result
        var modifiedString = modify(strings[i]);
        
        //push the modified string into the array
        modifiedStrings.push(modifiedString);
    }
    
    //return the array of modified strings
    return modifiedStrings;
    
    
    
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
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    for (var i = 0; i < strings.length; i++) {
        //use the test function to the current string
        if (!test(strings[i])) {
            //if string fails the test then return false
            return false;
        }
    }
    
    //if all pass the test, return true
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