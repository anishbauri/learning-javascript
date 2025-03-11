if (true) {
  let a = 32;
  var b = 30;
  const c = 45;
}
//console.log(a)
console.log(b);
//console.log(c)
//here let and const will not work but var will work
//nested scope
function one() {
  const username = "anish";
  function two() {
    //const website = "youtube";
    console.log(username);
  }
  two();
  //console.log(website);
}
one();
