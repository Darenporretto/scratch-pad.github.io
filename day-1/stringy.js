// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
//I:string
//O:length property of the input string
//C:return
//E:N/A


function length(string) {
    // YOUR CODE BELOW HERE //
    //return the length property of the input string
    return string.length; 
    //get the length of the string

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
//i:string
//o:should return lowercase version of string
//c:new string to lowercase
//e:n/a
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   return string.toLowerCase();
   //switch string to lowercase

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
//i:string
//o:should return uppercase version of string
//c:return a new string
//e:n/a
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toUpperCase();
    //return string forced to uppercase



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
//i:use the toDashCase datatype
//o:should return a dased string
//c:retrn new string to forced dash case
//e:n/a
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toLowerCase().replace(/\s+/g, '-');
    //change the string to lowercase and replace spaces with dashes



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
//i:string
//o:true if string begins with character, false otherwise
//c:
//e:n/a
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // Check if input string is empty
     if (string.length === 0) {
        return false;
    }
    
    // Convert both the first character of string and char to lowercase
    let firstCharLower = string.charAt(0).toLowerCase();
    let charLower = char.toLowerCase();
    
    // Compare the characters
    return firstCharLower === charLower;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
//i:string
//o:true if the string ends with the character, false otherwise
//c:
//e:n/a
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
     // Check if input sring is empty
     if (string.length === 0) {
        return false;
    }
    
    // Convert both the last character of string and char to lowercase
    let lastCharLower = string.charAt(string.length - 1).toLowerCase();
    let charLower = char.toLowerCase();
    
    // Compare the characters
    return lastCharLower === charLower;



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
//i:string
//o:strings concatenated into one
//c:
//e:n/a
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //concatenate both strings using the + operator
    return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
//i:strings
//o:return the longest of the two
//c:
//e:
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //compare the lengths of stringOne and stringTwo
    if (stringOne.length >= stringTwo.length) {
        return stringOne;
    } else {
        return stringTwo;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
//i:strings
//o:return -1 if the second is higher in order than the first, and return 0 if equal
//c:
//e:n/a
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}