const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
const start = async () => {
  try {
    const text = await readFile("./content/first.txt", "utf8");
    await writeFile(
      "./content/fourth.txt",
      `This is the fourth file: ${text}`,
      { flag: "a" }
    );
    console.log(text);
  } catch (e) {
    console.log(e);
  }
};
start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((text) => {
//     console.log(text);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
