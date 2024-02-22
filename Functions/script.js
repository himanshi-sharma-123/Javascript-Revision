//******************************************* */ Function Statement     aka function declaraction

// function a() {
//   console.log("a print");
// }

//******************************************* */ Function Expression

// var b = function () {
//   console.log("b print");
// };

//********************************************************/ Difference between above two is hoisting

// a();       // a called
// b();       // b is not a function
// function a() {
//   console.log("a called");
// }

// var b = function () {
//   console.log("b called");
// };

//**********************************************************Anonymous function
// function(){  // syntax error

// }

//********************************************************Named function Expression
// var b = function xyz() {
//   console.log("b called");
// };
// b();
// xyz()// reference error xyz is not defined because not created in a global scope

//****************************************************Difference between parameters and arguements
// var b = function (param1, param2) {
//   console.log("hello");
// };
// b(1, 2); // arguments

//*******************************First class functions : The ability of functions to be used as values can be passed as an arguements to another functions and returned from the functions.

var b = function (param1) {
  return function xyz() {};
};

console.log(b());
