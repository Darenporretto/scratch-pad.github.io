// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  b. you cannot use a method to solve this problem, you must use a for loop
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
I: function takes a new string
O: return a new string thst id reversed
C: you cannot use a method to solve this problem, must use a for loop
E: N/A
*/
function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //

    // create an empty string to hold our reversed result
    var output = "";
    // loop through the string from the end to the beginning
    for (let i = input.length - 1; i >= 0; i--){
      // add current letter to output
      output += input[i]; // output = output + input[i] 
    }
    //return output variable
    return output;
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