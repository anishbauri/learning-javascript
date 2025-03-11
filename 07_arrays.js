//arrays

const myArr = [0, 1, 2, 3, 4.5];
console.log(myArr);
console.log(myArr[4]);
//array methods
myArr.push(6);
console.log(myArr);
myArr.pop();
myArr.unshift(9);
//conloe.log(myarr.includes()); it is boolean it helps us to check whther the element is present or not
console.log(myArr.indexOf(3));
const newArr = myArr.join(); //it converts array elemt in stri
console.log(newArr);
// slice . splice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
// array functions
const marvel_heroes = ["thor", "ironman", "spiderman"];
const dcheroes = ["superman", "flash", "batman"];
marvel_heroes.push(dcheroes);
console.log(marvel_heroes);
marvel_heroes.concat(dcheroes);
console.log(marvel_heroes);
const allnewheroes = [...dcheroes, ...marvel_heroes];
console.log(allnewheroes);
const another_array = [1, 3, 5, 7, [9, 11], [13, [(17, 19)]]];
const realarray = another_array.flat(Infinity);
console.log(realarray);
//flat is used to make one single array by removing depth
