/** Q7
  * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 
 Examples
 minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 
 minMax([2334454, 5]) ➞ [5, 2334454]
 
 minMax([1]) ➞ [1, 1]
  */

// Simple Bubble Sort algorithm
function sortArray(array) {
  let beg = 0,
    end = array.length - 1;
  for (let i = beg; i < end; i++) {
    for (let j = 0; j < end - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
function minMax(array) {
  if (array.length == 1) {
    return [array[0], array[0]];
  }
  sortArray(array);
  return [array[0], array[array.length - 1]];
}
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([1, 2, 4, 7, 3, 10, 5]));
console.log(minMax([-1, 2, -7, 7, 3, 10, 5, -100]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));
