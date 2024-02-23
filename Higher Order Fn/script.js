const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// };

// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(calculate(radius, area));
console.log(radius.map(area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

/////////////******************************ARRAY PROTOTYPE: This fn is accessible to any array in the code */

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(radius.calculate(area));
