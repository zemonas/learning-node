const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, first) => {
  if (err) {
    console.log(err);
    return;
  }

  readFile("./content/second.txt", "utf8", (err, second) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(first, second);

    writeFile("./content/third.txt", first + second, { flag: "a" }, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log("File written successfully");
    });
  });
});
