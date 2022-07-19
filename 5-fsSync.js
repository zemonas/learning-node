const { readFileSync, writeFileSync } = require("fs");
console.log(readFileSync, writeFileSync);

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync("./content/third.txt", first + second, { flag: "a" });
