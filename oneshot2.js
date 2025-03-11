const course = {
  name: "js in hindi",
  price: "998",
  courseinstructor: "hitesh",
};
console.log(course);
// function
function anish() {
  console.log("a");
}
anish();

function add(a, b) {
  console.log(a + b);
}
add(4, "a"); // string
add(4, "3"); //43
add(4, 3); //7
function isusserloggedin(Yes, No) {
  if ((Yes == 1, No == 0)) {
    console.log("user logged in");
  } else {
    console.log("user not loged in");
  }
}
isusserloggedin(1, 0);
function islogeedin(username) {
  return `${username} just logged in `;
}
console.log(islogeedin("anish"));
console.log(islogeedin()); // undefined
function calculateCartprice(num2) {
  return num2;
}
console.log(calculateCartprice("2"));

function calculateCartprices(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartprices(200, 400, 500, 2000));
//... spread operator

function addnumbers(...num1) {
  return num1;
}
console.log(addnumbers(200, 300, 400));
let c = console.log(addnumbers(200, 300, 400));

const myNewArray = [200, 400, 3000, 5000];
function array(getArray) {
  return getArray[1];
}
console.log(array(myNewArray));
//var is for global scope;
