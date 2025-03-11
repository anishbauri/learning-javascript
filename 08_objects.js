//singleton
//object literals way to declare object
const mysym = Symbol("key1");
const JSuser = {
  name: " anish",
  age: 18,
  lastlogin_day: ["thusrsday", "friday", "sunday"],
  [mysym]: "mykey1",
};
console.log(JSuser["name"]);
console.log(JSuser);
Object.freeze(JSuser);
//it will freeze the object no changes will be allowed
