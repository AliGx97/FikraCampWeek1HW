/** Q6
  * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.
 
 Examples
 sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]
 
 sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]
 
 sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
 Notes
 The arrays can contain either positive or negative elements.
 The arrays will only contain integers.
 The arrays won't contain duplicate numbers.
 This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
  */
function sortPart(array, beg, end) {
  if (beg != end) {
    let mid = Math.floor((beg + end) / 2);
    sortPart(array, beg, mid);
    sortPart(array, mid + 1, end);
    merge(array, beg, mid, end);
  }
  return array;
}
function merge(array, beg, mid, end) {
  let sizeLeftPart = mid - beg + 1;
  let sizeRightPart = end - mid;
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < sizeLeftPart; i++) {
    leftArray.push(array[beg + i]);
  }
  for (let i = 0; i < sizeRightPart; i++) {
    rightArray.push(array[mid + i + 1]);
  }
  let i = 0,
    j = 0;
  for (let k = beg; k <= end; k++) {
    if (i == sizeLeftPart) {
      array[k] = rightArray[j];
      j++;
    } else if (j == sizeRightPart) {
      array[k] = leftArray[i];
      i++;
    } else {
      if (leftArray[i] < rightArray[j]) {
        array[k] = leftArray[i];
        i++;
      } else {
        array[k] = rightArray[j];
        j++;
      }
    }
  }
  return array;
}
let array1 = [23, 15, 34, 17, -28];
let array2 = [2, -5, 1, 4, 7, 8];
let array3 = [38, 57, 45, 18, 47, 39];
console.log(sortPart(array1, 0, array1.length - 1));
console.log(sortPart(array2, 0, array2.length - 1));
console.log(sortPart(array3, 0, array3.length - 1));
