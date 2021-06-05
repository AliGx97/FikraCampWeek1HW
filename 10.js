/** Q10
  * Create a function that squares every digit of a number.
 
 Examples
 squareDigits(9119) ➞ 811181
 
 squareDigits(2483) ➞ 416649
 
 squareDigits(3212) ➞ 9414
 Notes
 The function receives an integer and must return an integer.
  */

let squareDigits = (number) => {
  number = number.toString();
  let squaredNumber = [];
  for (let i = 0; i < number.length; i++) {
    squaredNumber.push(Math.pow(parseInt(number[i]), 2).toString());
  }

  console.log(parseInt(squaredNumber.join("").toString()));
};

squareDigits(27575);
squareDigits(9119);
squareDigits(2483);
squareDigits(3212);
