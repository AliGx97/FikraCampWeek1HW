/** Q19
  * Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
 
 Examples
 findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
 
 findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
 
 findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
 Notes
 Watch out for negative integers (numbers).
  */

let findLargestNums = (arr) => {
  let numOfArrays = arr.length,
    index = 0,
    i = 0;
  let result = [];

  while (index < numOfArrays) {
    /* the idea is to use bubble sort method to shift the biggest element
     * to be the last element in each arry */
    for (i = 0; i < arr[index].length - 1; i++) {
      if (arr[index][i] > arr[index][i + 1]) {
        let temp = arr[index][i];
        arr[index][i] = arr[index][i + 1];
        arr[index][i + 1] = temp;
      }
    }
    //Pushing that last (biggest) element of each array in the results array
    result.push(arr[index][i]);
    index++;
  }
  console.log(result);
};

findLargestNums([
  [4, 2, 7, 1],
  [20, 70, 40, 90],
  [1, 2, 0],
]); // [7, 90, 2]

findLargestNums([
  [-34, -54, -74],
  [-32, -2, -65],
  [-54, 7, -43],
]); // [-34, -2, 7]

findLargestNums([
  [0.4321, 0.7634, 0.652],
  [1.324, 9.32, 2.5423, 6.4314],
  [9, 3, 6, 3],
]); // [0.7634, 9.32, 9]
