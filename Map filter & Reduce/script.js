//*************************************** MAP******************************************* */

// const arr = [5, 1, 3, 2, 6];

// function double(x) {
//   return x * 2;
// }

// function triple(x) {
//   return x * 3;
// }

// function binary(x) {
//   return x.toString(2);
// }

// const output = arr.map(binary);
// console.log(output);

// const users = [
//   { firstName: "Himanshi", lastName: "Sharma", age: 21 },
//   { firstName: "Ishika", lastName: "Aggarwal", age: 21 },
//   { firstName: "Reva", lastName: "Malik", age: 22 },
//   { firstName: "Suhani", lastName: "Jain", age: 21 },
// ];

// const output = users.map((x) => x.firstName + " " + x.lastName);
// console.log(output);

//*************************************** FILTER ******************************************* */

// const arr = [5, 1, 3, 2, 6];

// //filter odd values

// function isOdd(x) {
//   return x % 2;
// }
// const output = arr.filter(isOdd);
// console.log(output);

// const users = [
//   { firstName: "Himanshi", lastName: "Sharma", age: 21 },
//   { firstName: "Ishika", lastName: "Aggarwal", age: 21 },
//   { firstName: "Reva", lastName: "Malik", age: 22 },
//   { firstName: "Suhani", lastName: "Jain", age: 21 },
// ];

// const output = users.filter((x) => x.age < 22).map((x) => x.firstName);
// console.log(output);

//*************************************** REDUCE ******************************************* */

// const arr = [5, 1, 3, 2, 6];

//sum or max

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));

// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output);

//max

// const output = arr.reduce(function (acc, curr) {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);
// console.log(output);

const users = [
  { firstName: "Himanshi", lastName: "Sharma", age: 21 },
  { firstName: "Ishika", lastName: "Aggarwal", age: 21 },
  { firstName: "Reva", lastName: "Malik", age: 22 },
  { firstName: "Suhani", lastName: "Jain", age: 21 },
];

// //acc = {21:3,22:1}
// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(output);

const output = users.reduce(function (acc, curr) {
  if (curr.age < 22) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output);
