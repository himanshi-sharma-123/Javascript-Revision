/////////////////// NORMAL CODE /////////////////////////////////

// var x = 7;
// function getName() {
//   console.log("Hello Hoisting");
// }

// getName();
// console.log(x);

/////////////////////  CALL STACK /////////////////////////////////

// getName();
// console.log(x);    // undefined
// var x = 7;
// function getName() {
//   console.log("Hello Hoisting");
// }

getName();
console.log(x); // undefined
var x = 7;
var fn = function getName() {
  // ERROR BECAUSE HERE IT ACT AS A VARIABLE , SIMILARLY IN CASE OF ARROW FUNCTION IT ACTS AS A VARIABLE, HENCE GIVES ERROR
  console.log("Hello Hoisting");
};
