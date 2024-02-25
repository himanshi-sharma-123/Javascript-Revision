////////////////////////////  ASYNC : ALWAYS RETURNS A PROMISE, EITHER RETURN A PROMISE OR IF THERE IS OTHER THING LIKE STRING ETC THEN IT AUTOMATICALLY WRAP IT INTO PROMISE.

//********************************* RETURN A PROMISE */
// const p = new Promise((resolve, reject) => {
//   resolve("Promise Resolved Value!!");
// });

// async function getData() {
//   return p;
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

//************************************************************************RETURN A VALUE WHICH WRAPS INTO PROMISE */

// async function getData() {
//   return "HELLO";
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

/////////////////////////******************************************************AWAIT WITH ASYNC*********************************** */

// const p = new Promise((resolve, reject) => {
//   resolve("Promise Resolved Value!!");
// });

// async function handlePromise() {
//   const val = await p;
//   console.log(val);
// }
// handlePromise();

/////////////////////////*****************************************************OLD VERSION VS AWAIT/ ASYNC*********************************** */

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 10000);
// });

// function getData() {
//   p.then((res) => console.log(res));
//   console.log("hello");
// }
// getData();

// OUTPUT :
// hello
// Promise Resolved Value!! (after 10 sec)

// //*******************************************************************************ASYNC AWAIT  example 1***********************************************************

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 10000);
// });

// async function handlePromise() {
//   const val = await p;
//   console.log("hello");
//   console.log(val);
// }
// handlePromise();

// // OUTPUT:
// // (AFTER 10 SEC)
// // hello
// // Promise Resolved Value!!

//**************************************************************************ASYNC AWAIT  example 2***************************************************************

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value2!!");
//   }, 5000);
// });

// async function handlePromise() {
//   const val = await p1;
//   console.log("hello");
//   console.log(val);

//   const val2 = await p2;
//   console.log("hello hey");
//   console.log(val2);
// }
// handlePromise();

// OUTPUT:
// (AFTER 10 SEC)
// hello
// Promise Resolved Value!!
// hello hey
// Promise Resolved Value2!!

////////////////////*****************************************************************REAL WORLD EXAMPLE***************************************************** */

// const API_URL = "https://api.github.com/users/himanshi-sharma-123";

// async function handlePromise() {
//   const data = await fetch(API_URL);
//   const jsonValue = await data.json();
//   console.log(jsonValue);
// }
// handlePromise();

////////////////////************************************************************REAL WORLD EXAMPLE ERROR HANDLING***************************************************** */

const API_URL = "https://invalidapi.com";

async function handlePromise() {
  // try {
  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  console.log(jsonValue);
  // }
  // catch (error) {
  //   console.log(error);
  // }
}
// handlePromise();

// or
handlePromise().catch((err) => console.log(err));
