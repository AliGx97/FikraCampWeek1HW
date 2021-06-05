/** Q9
  * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
 
 Examples
 numToEng(0) ➞ "zero"
 
 numToEng(18) ➞ "eighteen"
 
 numToEng(126) ➞ "one hundred twenty six"
 
 numToEng(909) ➞ "nine hundred nine"
 Notes
 There are no hyphens used (e.g. "thirty five" not "thirty-five").
 The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
  */

let numToEng = (number) => {
  let belowTwenty = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tenths = [
    "zero",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let numberInWords = [];
  if (number <= 19) {
    numberInWords.push(belowTwenty[number]);
    return numberInWords;
  }
  if (number <= 99) {
    let tens = Math.floor(number / 10); //to get the left digit
    numberInWords.push(tenths[tens]);
    let ones = number % 10; //to get the the right digit
    if (ones != 0) {
      numberInWords.push(belowTwenty[ones]);
    }
  } else if (number < 1000) {
    let hundreds = Math.floor(number / 100);
    numberInWords.push(belowTwenty[hundreds] + " hundred");
    let tens = number % 100;

    //we don't need (X00) to be (X hundered zero)
    if (tens != 0) {
      numberInWords.push(...numToEng(tens)); //to push it as a string and not an array
    }
  }
  return numberInWords;
};

console.log(...numToEng(999));
console.log(...numToEng(475));
console.log(...numToEng(100));
console.log(...numToEng(800));
console.log(...numToEng(850));
console.log(...numToEng(90));
console.log(...numToEng(49));
console.log(...numToEng(19));
console.log(...numToEng(20));
