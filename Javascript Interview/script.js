console.log("Javascript Interview");

//*******************************************Q-1 Js is Dynamically typed language*************************************************************

let vari = 67;
// console.log(vari);
vari = "Hello";
// console.log(vari);

//************************************************************SCOPING***********************************************************************

var globalScoped = 10;
scoping();
function scoping() {
  var functionScoped = 41;
  if (true) {
    let blockScoped = 45;
    // console.log(blockScoped); //45
  }
  // console.log(functionScoped); //41
}

// console.log(globalScoped); //10

//**************************************************************Hoisting************************************************************************

function myFunction() {
  // console.log("Hello Hoisting");
}
myFunction();

z = 40;
// console.log(z);
var z;

var x = 1;
a();
b();
// console.log(x); //1
function a() {
  var x = 10;
  // console.log(x);
}

function b() {
  var x = 100;
  // console.log(x);
}

//************************************************ DIFF B/W var let and const***********************************************************/

var varScoped = 1;
difference();
function difference() {
  let letScoped = 10;
  // console.log(letScoped);
}
// console.log(varScoped);

const constScoped = 400;
// console.log(constScoped);
// constScoped = 900; //Uncaught TypeError: Assignment to constant variable.

//********************************************** DIFF B/W undefined and null**************************************************************/

var y;
// console.log(y);
undefinedAndNull();
function undefinedAndNull() {
  var nullValue = null;
  // console.log(nullValue);
}
y = 10;

//************************************************* LEXICAL SCOPING *******************************************************************/

function ab() {
  var ba = 10;
  c();
  function c() {
    // console.log(ba); // 10
  }
}
ab();
// console.log(ba); // reference error : ba is not defined

//************************************************ SHADOWING ******************************************************************/

var ac = 10;
{
  var ac = 100;
  let bc = 200;
  const ca = 300;
  console.log(ac);
  console.log(bc);
  console.log(ca);
}
console.log(ac); // 100

//****************************************************************Rest Operator***********************************************************

display(1, 2, 3, 4, 5);
function display(first, second, ...restArguements) {
  // console.log(first);
  // console.log(second);
  // console.log(restArguements);
}

//************************ WRITE A FN THAT RETURNS THE REVERSE OF THE STRING ***************************************/

console.log(reverseString("Himanshi Sharma"));

// Method 1 :

// function reverseString(str) {
//   let ans = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     ans = ans + str[i];
//   }
//   console.log(ans);
// }

//Method 2 :
function reverseString(str) {
  return str.split("").reverse().join("");
}

//************************ WRITE A FN THAT RETURNS THE LONGEST WORD IN THE SENTENCE ***************************************/

console.log(longestWord("My name is Himanshi Sharma"));

function longestWord(str) {
  const words = str.split(" ");
  let ans = "";

  for (let word of words) {
    if (word.length > ans.length) {
      ans = word;
    }
  }

  return ans;
}

//************************ WRITE A FN THAT CHECKS WHETHER A GIVEN STRING IS A PALINDROME OR NOT WORD ***************************************/

console.log(palindrome("racecar"));

function palindrome(str) {
  let i = 0,
    j = str.length - 1;

  while (i < str.length && j >= 0) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

//************************ WRITE A FN TO REMOVE DUPLICATE ELEMENTS FROM AN ARRAY ***************************************/

console.log(duplicates([1, 2, 3, 4, 5, 1, 2]));

//METHOD 1:
// function duplicates(arr) {
//   const uniqueElements = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueElements.indexOf(arr[i]) === -1) {
//       uniqueElements.push(arr[i]);
//     }
//   }
//   return uniqueElements;
// }

//METHOD 2:
function duplicates(arr) {
  return [...new Set(arr)];
}

//************************ WRITE A FN TO CHECK WHETHER TWO STRINGS ARE ANAGRAM OR NOT ***************************************/

console.log(anagram("listen", "silent"));

function anagram(str1, str2) {
  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");

  if (sorted1 === sorted2) return true;
  else return false;
}

//************************ WRITE A FN THAT RETURNS THE NO. OF VOWELS IN A STRING ***************************************/

console.log(countVowels("Hello world!"));

// METHOD 1:
// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "A" ||
//       str[i] == "E" ||
//       str[i] == "I" ||
//       str[i] == "O" ||
//       str[i] == "U" ||
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[1] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// METHOD 2:
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

//************************ WRITE A FN TO FIND THE LARGEST NO. IN AN ARRAY ***************************************/

console.log(findLargest([2, 4, 6, 9, 3]));

function findLargest(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

//************************ WRITE A FN TO CHECK IF THE GIVEN NO. IS PRIME OR NOT ***************************************/

console.log(isPrime(7));
console.log(isPrime(10));

function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//************************ WRITE A PROGRAM TO REMOVE ALL WHITESPACE CHARACTER FROM A STRING ***************************************/

const inputString = " Hello,     Himanshi";

console.log(removeWhiteSpaces(inputString));

function removeWhiteSpaces(str) {
  const result = str.replace(/\s/g, "");
  return result;
}

//********************************************* CLOSURES *************************************************************/

function f1() {
  let a = 9;
  function f2() {
    console.log(a);
  }
  a = 100;
  return f2;
}

var z1 = f1();
console.log(z1);
z1();

//*******************************CALLBACK FUNCTION****************************** */

// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

//********************************************* ISSUES WITH CALLBACKS ****************************************************/

// 1. Callback hell

// const cart = ["shoes", "pen", "pant", "cosmetics"];

// api.creteOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.update();
//     });
//   });
// });

// 2. Inversion of control

//************************************************* PROMISES ******************************************************/
// const promise = createOrder(cart);
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

// createOrder(cart).then(function (orderId) {
//   return proceedToPayment(orderId);
// });

//********************************************* JAVASCRIPT LOGICAL & TRICKY INTERVIEW QUESIONS ******************************************/

// 1.
function fruit() {
  name = "banana";
  console.log(name);
  // console.log(price);

  var name = "apple";
  let price = 100; // hoisting will not be applid on let and const
}
fruit();

// 2.

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 5000);
// }

// 3.

console.warn(+true);
console.warn(typeof +true);

// 4.

console.warn(!"himanshi");
console.warn(typeof "himanshi");

// 5.

let data = "size";
const bird = {
  size: "small",
};
console.warn(bird[data]);
console.warn(bird["size"]);
console.warn(bird.size);
console.warn(bird.data);

// 6.

let c = { name: "peter" };
let d;

d = c;
c.name = "peter";
console.log(d.name);

// 7.

var x;
var x = 10;
console.log(x);

// 8.

let var1 = 3;
let var2 = new Number(3);

console.log(var1 == var2);
console.log(var1 === var2);

// 9.

function fruit() {
  console.log("Woof!");
}

fruit.name = "apple";

fruit();

// 10.

function sum(v1, v2) {
  return v1 + v2;
}
console.warn(sum(1, "2"));

// 11.

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

// 12.

function getAge(...args) {
  console.log(args); // array

  console.log(typeof args); // object  (for typeof:  In javascript there is nothing like an array only object)
}
getAge(21);

// 13.

function gAge() {
  "use strict";
  let age = 21;
  console.log(age);
}
gAge();

// 14.

const s = eval("10*10+5");
console.warn(s);

// 15.

// How long is cool_secret accessible?
sessionStorage.setItem("cool_secret", 123); // it will be removed once user closed it

// 16.

// const obj = { 1: "a", 2: "b", 3: "c" };
// console.log(obj.hasOwnProperty("1")); // true
// console.log(obj.hasOwnProperty(1)); // true

// 17.

const obj = { a: "one", b: "two", a: "repeat" };
console.log(obj); //{a:"repeat", b:"two"} overwrite

// 18.

// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"), 1000);
// const baz = () => console.log("Third");
// bar();
// foo();
// baz();
// Output: First Third Second

// 19. // In html file bubbling up

// 20.

// const person = { name: "Himanshi" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21)); // Himanshi is 21
// console.log(sayHi.bind(person, 21)); // returns fn
// console.log(sayHi.bind(person, 21)()); // Himanshi is 21

// 21.

// function sayHi() {
//   return (() => 0)();
// }
// console.log(typeof sayHi()); // number

// 22.

function sayHi() {
  return () => 0;
}
console.log(typeof sayHi()); // function

// 23.
console.log(typeof typeof 1); // string (because typeof 1 is number and typeof number is string)

// 24.

// const numbers = [1, 2, 3];
// numbers[9] = 11;
// console.log(numbers);

// 25.
const numbers = [1, 2, 3];
numbers[9] = numbers;
console.log(numbers); // infinite array at 9th position

// 26.
// Everything in JS is either a...
// A: primitive or object  // This is the answer
// B: function or object
// C: only objects
// D: number or object

// 27.

console.log(!!null); // false null is negative value then negate it making it true then again negate it making it false
console.log(!!""); // false
console.log(!!1); // true

// 28.

// console.warn(setInterval(() => console.log("Hi"), 1000));
// console.warn(setInterval(() => console.log("Hi"), 1000));
// console.warn(setInterval(() => console.log("Hi"), 1000));

// output will be infinte times HI HI HI

// 29.
console.log([..."himanshi"]); // ['h', 'i', 'm', 'a', 'n', 's', 'h', 'i']

// 30.
// (() => {
//   let l = (m = 10);
// })();
// console.log(typeof l); // undefined

// 31.

// (() => {
//   let l = (m = 10);
// })();
// console.log(typeof m); // number

// 32.

(() => {
  let l = 10;
})();

(() => {
  let l = 10;
})();
console.log(typeof l); // undefined
