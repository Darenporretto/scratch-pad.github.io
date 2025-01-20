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
I: Function takes in a string.
O: Function returns a number of the length of the input string.
C: 
E:
*/
function length(string) {
    // YOUR CODE BELOW HERE //

   // Return the input string's length
    return string.length;

    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to lowercase.
 */
/*
I: Function takes in an input string.
O: Function returns a new string forced to lowercase.
C:
E:
*/
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   
    // Return the input string forced to lowercase
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
I: Function takes in an input string.
O: Function will return a new String forced to uppercase.
C:
E:
*/
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    // Return the input string forced to uppercase. 
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
I: Function takes in an input string.
O: Function will return a new String forced to dash-case.
C:
E:
*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

    // Return the input string forced to dash-case
    return string.replace(/([a-z])([A-Z])/g, "$1-$2") // Replace camelcase with dashes
    .replace(/[_\s]+/g, '-') // Replace underscores and spaces with dashes
    .toLowerCase(); // Force to lowercase



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
I: Function takes in a string and a single character.
O: Function returns true if string begins with character, false otherwise.
C: Function is case insensitive. 
E:
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    // Use the charAt method to the first character of the string 
    return string.charAt(0).toLowerCase() === char.toLowerCase();
    // Convert first character of the string and goven charcter to lowercase
    // Compare versions for equality using ===

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
I: Function takes in a String and a single character.
O: Function returns true if the String ends with the character, false otherwise.
C: Function is case insensitive. 
E:
*/
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

    // Convert both string and character to lowercase
    const lowerStr = string.toLowerCase();
    const lowerChar = char.toLowerCase();
    // Use th endsWith method to check if the last character of the lowercase string matches the lowercase character
    return lowerStr.endsWith(lowerChar);

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
I: Function takes in two strings.
O: Function will return the strings concatenated.
C:
E: Use the correct operator '+' in order to concatenate the two input strings. 
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    // Concatenate both input strings using th '+' operator
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
I: Function can take in any number of strings. 
O: Function returns all of the joined together. 
C: Function uses the join method. 
E: Function pulls out all arguments passed and stores them in the args array.
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // This Function pulls out all the arguments passed to it and stores them in an Array called args
    var args = Array.from(arguments);
    
    // Return the concatenated strings using the join method and an empty string
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
I: Function takes in two strings.
O: Function should return the longest string. 
C:
E:
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // Use the .length method with an if else statement to return the longer string
    if (stringOne.length > stringTwo.length) {
        return stringOne;
    } else {
        return stringTwo;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: Function takes in two strings. 
O: Functions return will depend on alphabetical order. 
C:
E:
*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // Comparison with the '>,<' operators to compare strngs alphabetically
    if (stringOne < stringTwo) {
        return 1; // If first string is higher alphabetically
    } else if (stringOne > stringTwo){
        return -1; // If second string is higher alphabetically
    } else {
        return 0; //If equal
    }

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: 
O: 
C:
E:
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