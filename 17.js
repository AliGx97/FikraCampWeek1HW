/** Q17
  * Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
 
 Examples
 numberSplit(4) ➞ [2, 2]
 
 numberSplit(10) ➞ [5, 5]
 
 numberSplit(11) ➞ [5, 6]
 
 numberSplit(-9) ➞ [-5, -4]
 Notes
 All numbers will be integers.
 You can expect negative numbers too.
  */

let numberSplit = (number) => {
  let arr = [];
  arr.push(Math.floor(number / 2));
  arr.push(Math.round(number / 2));
  console.log(arr);
};

numberSplit(4); // [2, 2]

numberSplit(10); // [5, 5]

numberSplit(11); // [5, 6]

numberSplit(-9); // [-5, -4]
numberSplit(-15);
