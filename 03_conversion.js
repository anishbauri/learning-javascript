// Type conversion -> we mannually converts on type to other
// type coercion -> Javascript automatically convert the the types behind the scene for us

// type conversion
let year = "2000";
// console.log(typeof year);

let firstName = "anish";
console.log(Number(firstName)); // NaN
// console.log(typeof Number(year));

console.log(Number(year) + 2);

// type coercion
console.log("I am " + 23 + " year old");
let lasttName = "bauri";

let fullName = firstName + lasttName; // concatenation
console.log(fullName);

console.log("23" + "20" - 5);
console.log(23 + "20");
console.log("23" - 20 + "5");

// must rember the following rules
// + -> string
// *,/,- -> number
