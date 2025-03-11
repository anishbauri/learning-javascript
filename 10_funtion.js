function calculateCartprice(...num1) {
  return num1;
}
console.log(calculateCartprice(200, 400, 500));

function calculateCartprice1(val1, val2, ...num2) {
  return num2;
}
console.log(calculateCartprice1(200, 400, 500, 2000)); //here val1 goes to 200 400 goes to val2 and rest array
const user = {
  username: "hitesh",
  price: 199,
};
function handleObject(anyobject) {
  console.log(`usename is${anyobject.username}and price is${anyobject.price}`);
}

handleObject(user);
const mynewarray = [200, 400, 600, 800];
function returnthirdvalue(getarray) {
  return getarray[2];
}

console.log(returnthirdvalue(mynewarray));
