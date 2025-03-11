// mathematical operator -> +,-,*,/,++,--
// conditional operattor -> >,<,>=,<=, ==, ===

// mathematical operator
let a = 8;
let b = 6;

console.log(" sum = ", a + b);
console.log(" diff = ", a - b);
console.log(" mul = ", a * b);
console.log(" div = ", a / b);
console.log(" div = ", Math.ceil(a / b));
console.log(" div = ", Math.floor(a / b));
console.log(" remainder = ", a % b);

// ++ -> increment by 1 (+1)
a++; // a= a+1

console.log(a);

// -- -> decrement by 1 (-1)
b--; // b = b-1
console.log(b);

// conditional operator

let c = 5;
console.log(typeof c);
let d = "5";
console.log(typeof d);

console.log(c == d);
console.log(c === d);

// if else

let age = 8;
if (age >= 18) {
  console.log("can vote");
} else {
  console.log("can not vote");
}
