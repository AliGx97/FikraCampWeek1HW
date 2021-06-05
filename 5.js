/** Q5
 * Write a binary search function
 */

function sort(array, beg, end) {
  if (beg != end) {
    let mid = Math.floor((beg + end) / 2);
    sort(array, beg, mid);
    sort(array, mid + 1, end);
    merge(array, beg, mid, end);
  }
  return;
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
  return;
}

let recursiveBS = (element, arr, beg, end) => {
  if (beg > end) {
    return "Not Found";
  }
  let middle = Math.floor((beg + end) / 2);
  if (arr[middle] == element)
    return "Found at index: " + middle + " after sorting the given array";
  if (arr[middle] > element) {
    return recursiveBS(element, arr, beg, middle - 1);
  } else {
    return recursiveBS(element, arr, middle + 1, end);
  }
};
function BinarySearch(element, arr) {
  let beg = 0,
    end = arr.length - 1;
  sort(arr, beg, end);
  return recursiveBS(element, arr, beg, end);
}
console.log(BinarySearch(5, [4, 2, 5, 2, 1, 4, 6, 7, 9]));
console.log(BinarySearch(1, [4, 2, 5, 2, 1, 5, 6, 1, 9]));
console.log(BinarySearch(2, [4, 2, 5, 2, 1, 5, 6, 1]));
console.log(BinarySearch(5, [4, 1, 3, 2, 6, 7, 8]));
