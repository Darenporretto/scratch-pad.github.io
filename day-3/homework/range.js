// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
/*
I: function called range that takes two integers as parameters
O: returns an Array containing all integers between the two parameters, inclusively
C: n/a
E: n/a
*/
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // create an empty array to hold the result
    var result =[];

    //checking to see if an ascending  or descending order is needed
    if (start <= end) {
        //ascending 
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    } else {
        // descending
        for ( let i = start; i >= end; i--) {
            result.push(i);
        }
    }
    //return the resulting array
    return result;
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}