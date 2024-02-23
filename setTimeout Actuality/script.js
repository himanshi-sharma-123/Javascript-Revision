// console.log("Start");

// setTimeout(function cb() {
//   console.log("Callback");
// }, 5000);

// console.log("End");

// // million

// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log("While expires");

//************ SETTIMEOUT(0) */
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 0);

console.log("End");
