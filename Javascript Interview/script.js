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

setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

//********************************************* ISSUES WITH CALLBACKS ****************************************************/

// 1. Callback hell

const cart = ["shoes", "pen", "pant", "cosmetics"];

api.creteOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.update();
    });
  });
});

// 2. Inversion of control

//************************************************* PROMISES ******************************************************/
const promise = createOrder(cart);
promise.then(function (orderId) {
  proceedToPayment(orderId);
});

createOrder(cart).then(function (orderId) {
  return proceedToPayment(orderId);
});
