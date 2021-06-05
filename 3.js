/** Q3
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * example HowManyPairs("RLRLRRLL") => 3
 * example HowManyPairs("RRLLRRRLLR") => 1
 * HowManyPairs("RLRLRRLL") => 3
 * HowManyPairs("RRLLRRRLLR") => 1
 * HowManyPairs("RRLRLRRLLRRLLLRR") => 1
 */

function HowManyPairs(shoes) {
  let pairs = {
    R: 0,
    L: 0,
    P: 0,
  };
  let i = 0,
    length = shoes.length;

  while (i < length) {
    pairs[shoes[i]]++;

    if (pairs["L"] == pairs["R"]) {
      pairs["P"]++;
      pairs["R"] = 0;
      pairs["L"] = 0;
    }
    i++;
  }
  return pairs["P"];
}
console.log(HowManyPairs("RLRLRRLL")); // 3
console.log(HowManyPairs("RRLLRRRLLR")); // 1
console.log(HowManyPairs("RLRLRRLL")); // 3
console.log(HowManyPairs("RRLLRRRLLR")); // 1
console.log(HowManyPairs("RRLRLRRLLRRLLLRR")); // 1
