const names = require("./2-name");
console.log(names);
const { sayhi } = require("./2-utils");
console.log(sayhi);
require("./2-mind-grenade");
sayhi(names.john);
sayhi(names.peter);
sayhi("susan");
