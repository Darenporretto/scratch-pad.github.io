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
/*
I: FUNCTION TAKES IN A STRING
O: RETURNS THE NUMBER REPRESENTING THE LENGTH OF THE INPUT STRING
C: N/A
E: N/A
*/

function length(string) {
    // YOUR CODE BELOW HERE //

    // RETURN THE STRING PROPERTY OF THE INPUT STRING
    return string.length;

   
    
    // YOUR CODE ABOVE HERE //
}
/*
I: function takes in a string
O: returns a new string forced to lowercase
C: N/A
E: N/A
*/
/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
    }
/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
I: function takes in a string
O: returns a new string forced to uppercase
C: N/A
E: N/A
*/
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toUpperCase();
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
/*
I: function takes in a string
O: returns a new string forced to dash-case
C: N/A
E: N/A
*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // convert the string to lowercase first then replace all spaces eith dashes
    return string.toLowerCase().split(' ').join('-');
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
/*
I: function takes in to parameters a string and a character
O: output true if string begins with char, false otherwise
C: the function is case sensitive
E: N/A
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // convert string and char to be equally lowercase
    return string.toLowerCase().charAt(0) === char.toLowerCase();

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
/*
I: takes in a single char and input string
O: true if if the string ends with the char false other wise
C: function is case sensitive
E: N/A
*/
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // convert strings and chars to lowercase
    var lowerCaseString = string.toLowerCase();
    var lowerCaseChar = char.toLowerCase();

    //last char must match
    return lowerCaseString.charAt(lowerCaseString.length - 1) === lowerCaseChar;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
I: two strings
O: strings concatenated into one
C: n/a
E: n/a
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
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
/*
I: two strings
O: joined strings
C: n/a
E: n/a
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //join args into a single string
    return args.join('');


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
/*
I: twop strings
O: longest string
C:n/a
E:n/a
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // compare string lengths and return longer of the two
    return stringOne.length >= stringTwo.length ? stringOne : stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: two strings
O: 1 if first is greater. -1 if secomnd is greater. 0 if not equal
C:n/a
E:n/a
*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // compare the 2 strings alphabetically
    if (stringOne < stringTwo) {
        return 1;
    } else if (stringOne > stringTwo) {
        return -1;
    } else {
        return 0;
    }
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: two strings
O: 1 if first is lower. -1 if second is lower. 0 if not equal
C:n/a
E:n/a
*/
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // compare the 2 strings alphabetically
    if (stringOne > stringTwo) {
        return 1;
    } else if (stringOne < stringTwo) {
        return -1;
    } else {
        return 0;
    }



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