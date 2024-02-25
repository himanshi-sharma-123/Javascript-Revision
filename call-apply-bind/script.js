//******************* CALL (FN BORRWOING) */

let name = {
  firstname: "Himanshi",
  lastname: "Sharma",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      ", from" +
      " " +
      hometown +
      " " +
      state
  );
};

printFullName.call(name, "Delhi", "New Delhi");

let name2 = {
  firstname: "Mansi",
  lastname: "Sharma",
};

printFullName.call(name2, "Bangalore", "xyz");
printFullName.apply(name2, ["Bangalore", "xyz"]); //******** apply (passing as a list) */

//************ BIND METHOD (keeps a copy of method and use it later) */
let printMyName = printFullName.bind(name2, "Bangalore", "xyz");
console.log(printMyName);
printMyName();
