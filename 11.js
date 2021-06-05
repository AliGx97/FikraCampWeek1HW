/** Q11
  * Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.
 
 Example
 fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
 
 fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 Notes
 Make sure to return an array.
  */

let fizzBuzz = (number) => {
  let array = [];
  let i = 0,
    j = 1;
  while (i < number) {
    if (j % 3 == 0 && j % 5 == 0) {
      array.push("FizzBuzz");
    } else {
      if (j % 3 == 0) array.push("Fizz");
      else if (j % 5 == 0) array.push("Buzz");
      else array.push(j);
    }
    i++;
    j++;
  }
  console.log(array);
};

fizzBuzz(10);
fizzBuzz(15);
fizzBuzz(13);
fizzBuzz(25);
