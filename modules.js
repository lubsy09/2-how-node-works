// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const C = require("./text-module-1");
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
// const calc2 = require("./text-module-2");
const { add, multiply } = require("./text-module-2");
console.log(multiply(2, 5));

// caching
require("./text-module-3")();
require("./text-module-3")();
require("./text-module-3")();