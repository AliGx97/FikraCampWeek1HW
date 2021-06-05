let arr = [1, 2, 3, 5, 7, 4];
let arr2 = [5, 5, 5, 5, 5, 5];
let arr3 = [1, 2, 3, 5, 7, 4];
let arr4 = [1, 2, 3, 5, 7, 4];
let arr5 = [1, 2, 3, 5, 7, 4];

console.log(arr.indexOf(5));

console.log(arr2.every((element) => element == 5));

console.log(arr3.fill(4, 3));

console.log(
  arr4.filter((element) => {
    return element >= 3;
  })
);

console.log(
  arr5.map((element) => {
    return element == 3;
  })
);

let ameer = { name: "Amir Ali", age: 24 };
let ahmed = { name: "Ahmed Hasan", age: 26 };
let zain = { name: "Zain Omar", age: 28 };
// console.log(ameer);
// console.log(zain);
// console.log(ahmed);
// console.log({ ameer, zain, ahmed });
console.table({ ameer, zain, ahmed });
console.table(["%c FikraCamps", "color:green"]);
