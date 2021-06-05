/** Q12
  * Create a function that concatenates n input arrays, where n is variable.
 
 Examples
 concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
 
 concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
 
 concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
 
 concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
 Notes
 Arrays should be concatenated in order of the arguments.
  */

function concat() {
  let numOfArrays = arguments.length;
  let concatenatedArray = arguments[0];

  let i = 1; //we stored the first array in the concatenatedArray
  while (i < numOfArrays) {
    // .concat() returns a new array without changing the original one, therfore we're reassigning
    concatenatedArray = concatenatedArray.concat(arguments[i]);
    i++;
  }
  console.log(concatenatedArray);
}

concat([1, 2, 3], [2, 4, 1]);
concat([1, 2, 3], [4, 5], [6, 7]); // [1, 2, 3, 4, 5, 6, 7]
concat([1], [2], [3], [4], [5], [6], [7]); // [1, 2, 3, 4, 5, 6, 7]
concat([1, 2], [3, 4]); // [1, 2, 3, 4]
concat([4, 4, 4, 4, 4]); // [4, 4, 4, 4, 4]
