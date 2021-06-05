/** Q20
  * A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.
 
 [1, 3, 3, 5, 5, 5]
 // original array
 
 [1, 3, 5]
 // original array transformed into a set
 Create a function that sorts an array and removes all duplicate items from it.
 
 Examples
 set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
 
 set([4, 4, 4, 4]) ➞ [4]
 
 set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
 
 set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
 Notes
 For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).
 See resources for a hint if you get stuck.
  */
let set = (arr) => {
  arr.sort((a, b) => a - b);
  let index = 0,
    length = arr.length;
  while (index < length) {
    let count = 0;
    for (let i = index + 1; i < length; i++) {
      if (arr[i] != arr[index]) {
        break;
      }
      count++;
    }
    arr.splice(index, count);
    index++;
  }
  return arr;
};

console.log(set([1, 3, 3, 5, 5])); //[1, 3, 5]
console.log(set([4, 4, 4, 4])); //[4]
console.log(set([5, 7, 8, 9, 10, 15])); //[5, 7, 8, 9, 10, 15]
console.log(set([3, 3, 3, 2, 1])); //[1, 2, 3]
