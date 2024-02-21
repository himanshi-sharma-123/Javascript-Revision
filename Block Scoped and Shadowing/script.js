///////////////////////// BLOCK SCOPED //////////////////////////

// {
//   var a = 10;
//   let b = 100;
//   const c = 1000;
//   console.log(a); //10
//   console.log(b); //100
//   console.log(c); //1000
// }

// console.log(a); //10
// console.log(b); // error b is not defined
// console.log(c); // error c is not defined

//////////////////////////// SHADOWING /////////////////////////////

// var a = 10;
// {
//   var a = 100;
//   let b = 200;
//   const c = 300;
//   console.log(a);  //100
//   console.log(b);  //200
//   console.log(c);  //300
// }
// console.log(a);  //100

// let a = 10;
// {
//   var b = 100;
//   let a = 200;
//   const c = 300;

//   console.log(a);  //200
//   console.log(b);  //100
//   console.log(c);  //300
// }

// console.log(a);  //10

////////////////////////// ILLEGAL SHDOWING //////////////////////////////////////

// let a = 10;
// {
//   var a = 20; //SyntaxError: Identifier 'a' has already been declared
// }

// let a = 10;
// {                 // LEGAL SHADOWING
//   let a = 20;
// }

var a = 10;
{
  // LEGAL SHADOWING
  let a = 100;
}
