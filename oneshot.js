console.log("hitesh");
const accountID = 14453;
console.log(accountID);
//accountID = 2;
let accountEmail = "a";
accountEmail = "b";
console.log(accountEmail);
console.table([accountID, accountEmail]);
//prefer not to use var because of functional scope and block scope
//datatypes - numbers , string,boolean,bigint,null ,symbol,object
//undefined
let a = 1;
console.log(typeof a);
let b = true;
console.log(typeof b);
console.log(typeof null);
let score = "33abc";
let score1 = 33;
console.log(typeof score);
console.log(typeof score1);
let valueinnumber = Number(score);
console.log(valueinnumber);
console.log(typeof valueinnumber);
// "33"=>33
//"33abc"=>Nan but type is number line no-23;
let isloggedin = 1;
let booleanisloggedin = Boolean(isloggedin);
console.log(booleanisloggedin);
let isloggedin1 = String(isloggedin);
console.log(isloggedin1);
console.log(typeof isloggedin1);
let value = 4;
let negvalue = -value;
console.log(negvalue);
//String Addition
let str1 = "hello";
let str2 = "hi";
console.log(str1 + str2);
//complex situtation
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2); //converts all to string
console.log(1 + 2 + "3"); //1+2 is number then number+string=string
console.log(1 + "2" + 3); // first 1+"2" is string 12 then coverts 3 into strings and the add strings
console.log("1" + 2 + 3);
console.log(+true);
console.log(+"");
let gamecounter = 100;
gamecounter++;
console.log(gamecounter);
console.log("2" > 1);
// data types
//primitive
// 7 types string number boolean null undefined bigint symbol
// Refernce type (non primitve)
//array obejcts functions
const id = Symbol("123");
const anotherid = Symbol("123");
console.log(anotherid);
console.log(id === anotherid); //false
const heros = ["heros", "hi"]; //arrays
//objects
//={ name:
// age:} syntax
let myobj = {
  name: "anish",
  age: 18,
};
console.log(myobj);
//function
//function(){} syntax
const myfunction = function () {
  console.log("hello world");
};
console.log(typeof myfunction);
// strings
const name = "anish";
const repocount = 10;
console.log(`my name is ${name} and myrepocount is ${repocount}`); // concatenate using backticks`` and acces using ${}
const gamename = new String("xyz12234"); //another way to declare string
console.log(gamename[0]);
console.log(gamename.toUpperCase()); //converts uppercase to lowercase
console.log(gamename.charAt(1)); // at index 1 what value is there
console.log(gamename.indexOf()); // what index what is present
console.log(gamename.substring(0, 4)); //creates a substring from index 0 to 4
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-")); // replace %20 to -
const score3 = 400;
const balance = new Number(100);
console.log(balance);
