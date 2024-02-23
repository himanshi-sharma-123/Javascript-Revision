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

//*******************************EVENT LISTENERS****************************** */
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//   console.log("Button Clicked");
// });

//*******************************CLOSURES ALONG WITH EVENT LISTENERS****************************** */

function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
  });
}

attachEventListener();

// Garbage Coolection and Remove Event Listener : Event Listeners are heavy , means it takes memory. We will not be able to free up the extra memory.
