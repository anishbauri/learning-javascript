function addtwonumbers(number1, number2) {
  console.log(number1 + number2);
}
addtwonumbers(3, "4");
addtwonumbers(3, 4);
addtwonumbers("3", "4");

//second method
function addtwonumbers(number1, number2) {
  console.log(number1 + number2);
}
const result1 = addtwonumbers(3, 5);
console.log(result1);
//method3
function addtwonumbers(number1, number2) {
  let result = number1 + number1;
  return result;
}
const result = addtwonumbers(3, 5);
console.log("Result=", result);

function loginusermessage(username) {
  return ` $(username) just logged in `;
}
console.log(loginusermessage("anish"));
