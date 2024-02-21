// function x() {
//   var a = 9;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var z = x();
// console.log(z); //ƒ y() {console.log(a);}

// z(); //9

///////////////////////////////// CORNER CASES ////////////////////////////////////////

// function x() {
//   var a = 9;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }

// var z = x();
// console.log(z); //ƒ y() {console.log(a);}

// z(); //100

/////////////////////////////  DEEP INTO THE CLOSURES //////////////////////////////////////
function z() {
  var b = 900;
  function x() {
    var a = 9;
    function y() {
      console.log(a, b); // 9 900
    }
    y();
  }
  x();
}
z();
