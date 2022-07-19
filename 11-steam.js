const { createReadStream } = require("fs");

const stream = createReadStream("../content/fourth.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
  console.log("\n");
});
stream.on("error", (err) => {
  console.log(err);
});
