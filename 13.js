/** Q13
  * Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
 
 Examples
 arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 
 arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
 
 arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 Notes
 Notice that num is also included in the returned array.
  */

let arrayOfMultiples = (num, length) => {
  let outputArray = [];
  let i = 1;
  if (length <= 0) {
    console.log("Length should be greater than zero");
    return;
  }
  while (i <= length) {
    outputArray.push(num * i);
    i++;
  }
  console.log(outputArray);
};

arrayOfMultiples(7, 5); // [7, 14, 21, 28, 35]
arrayOfMultiples(12, 10); // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
arrayOfMultiples(17, 6); // [17, 34, 51, 68, 85, 102]
arrayOfMultiples(0, 4);
arrayOfMultiples(-3, 4);
arrayOfMultiples(4, -3);
arrayOfMultiples(6, 1);
arrayOfMultiples(6, 2);
arrayOfMultiples(6, 0);
