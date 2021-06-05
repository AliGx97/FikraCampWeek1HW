/** Q4
 *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
 *    letterCount('abcac') => {a: 2, b: 1, c: 2}
 */

function HowManyLetters(word) {
  let letters = {};
  for (let i = 0; i < word.length; i++) {
    if (letters[word[i]]) {
      letters[word[i]]++;
    } else {
      letters[word[i]] = 1;
    }
  }
  return letters;
}
console.log(HowManyLetters("kkssffoos"));
console.log(HowManyLetters("kksfffsfssfokkos"));
