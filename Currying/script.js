// Currying : It is a functional programming technique that involves transforming a fn that takes multiple arguements into a sequence of fns that take one arguement each. This creates a chain of fns, where each fn returns another fn until the final result is achieved.

// Currying can be implemented by two ways : by bind and by closures

// by bind

// let mutliply = function (x, y) {
//   console.log(x * y);
// };

// let mutliplyByTwo = mutliply.bind(this, 2);
// mutliplyByTwo(3);

// by closures

let mutliply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let mutliplyByTwo = mutliply(2);
mutliplyByTwo(3);
