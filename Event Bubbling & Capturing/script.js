// event bubbling

// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log("grandparent clicked");
// });

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("parent clicked");
// });

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("child clicked");
// });

//event trickling/capturing

// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("grandparent clicked");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   true
// );

// event propagation in bubbling
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent clicked");
    e.stopPropagation();
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child clicked");
  },
  false
);

//event propagation in capturing
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   (e) => {
//     console.log("grandparent clicked");
//     e.stopPropagation();
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   true
// );
