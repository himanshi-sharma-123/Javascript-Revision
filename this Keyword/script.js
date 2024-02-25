// "use strict";
//////************* this in global scope */
console.log(this);

//****************** this inside a fn */
function x() {
  console.log(this);
}
// x();

// this inside non-strict mode = (this substitution)

// If the value of this keyword is undefined or null
// this keyword will be replaced with globalObject only in non strict mode

//************this keyword value depends on how the fn is called (window) */
x();
window.x();

//*********this inside a object's method */
// here x will be a method of an object obj
// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//     console.log(this.a);
//   },
// };

// obj.x();

//****************** call apply bind methods */
// const student = {
//   name: "Himanshi",
//   printName: function () {
//     console.log(this.name);
//   },
// };

// student.printName();

// const student2 = {
//   name: "Mansi",
// };

// student.printName.call(student2);

//******************** INSIDE ARROW FN */

const obj = {
  a: 10,
  x: () => {
    console.log(this); // global Object
  },
};
obj.x();

//******************** INSIDE NESTED ARROW FN */

const obj2 = {
  a: 20,
  x: function () {
    // enclosing lexical context
    const y = () => {
      console.log(this); // fn
    };
    y();
  },
};
obj2.x();

//******* this inside DOM */
// refence to HTML Element
