// let , const, var
// let , var -> edit
// const -> edit not

// variable using let

let name = "abhishek";
// console.log(typeof name);
// let name;
// console.log("name ->", name)
name = "raj";
console.log("x ->", name);

// const
const age = 30;
console.log(typeof age);
// const age ; // error
// age = 45;  // error
console.log("age = ", age);

// var
var c = 20;
var c = 30; // No error, c is re-declared

// scope of let and var
// let and const -> blocked scope
// var -> functional scoped

function exampleVar() {
  if (true) {
    var x = 10;
  }
  console.log("x->", x); // 10, because var is function-scoped
}

function exampleLet() {
  if (true) {
    let y = 10;
    console.log("y ->", y);
  }
  //   console.log(y); // ReferenceError: y is not defined, because let is block-scoped
}

exampleVar();
exampleLet();
