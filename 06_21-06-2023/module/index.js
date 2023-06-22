const fun1 = require("./file1.js");
console.log("fun1 :", fun1);
const { multiply } = require("./file2.js");
const { divide } = require("./file2.js");

console.log("Multiply:", multiply(5, 2));
console.log("Divide:", divide(56, 48));
console.log(fun1.sum(20, 20));
console.log(fun1.sub(95, 49));
