// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Hello");
// }
// x();

//////////////////////// Tricky Js Interview Question //////////////////////////

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Hello");
// }
// x();

// o/p
// Hello
// 6
// 6
// 6
// 6
// 6

// To solve this issue use let instead of var

// The above issue also can be solved using var

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("hello");
}
x();
