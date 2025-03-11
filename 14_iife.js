function chai() {
  console.log(`dbconnected`);
}
chai();

(function chai() {
  console.log(`dbconnected`);
})();
(() => {
  console.log(`db connected two`);
})(); //here semicolon is important
((name) => {
  console.log(`dbconnected3 $(name)`);
})("anish");
