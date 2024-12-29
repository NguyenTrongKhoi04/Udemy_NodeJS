// console.log(arguments);
// console.log(require("module").wrapper);

const C = require("./test-module-1");
const calc = new C();
console.log(calc.add(2,5));

const {add, multiply, divide} = require("./test-module-2");
console.log(multiply(2,5));

const C2 = require("./test-module-2");
console.log(C2.add(1,2));

// Caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();