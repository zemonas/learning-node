const path = require("path");
const filepath = path.join(__dirname, "/test.txt");
console.log(filepath);
const base = path.basename(filepath);
console.log(base);

const absolutePath = path.resolve(__dirname, "test.txt");
console.log(absolutePath);
