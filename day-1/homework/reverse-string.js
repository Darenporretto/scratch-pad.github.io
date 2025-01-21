// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
/*
I: Function takes in a strin as its only input. 
O: Returns a new string representingthe input string reversed. 
C:
E:
*/
function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    // Initialize an empty string to collect reversed chars
    let reversed = "";

    // Loop through the string from the last char
    for (let i = input.length - 1; i >= 0; i--) {
      // Concatenate the current char to the result
      reversed += input[i];
    }
    // Return the reversed string
    return reversed;

    /*
    -First we initialize an empty string to store the the reversed string. 
    -Create a loop that starts from the last index and reverses decreasing 'i'. 
    -For every char in the string, last to first, concatenate into the reversed string. 
    -When the loop is completed, return the stirng reversed. 

    - Use the += operator to add characters to the string rversed
    - aUse a for loop to loop backward using i-- to get the string in the order reversed. 
    */
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}