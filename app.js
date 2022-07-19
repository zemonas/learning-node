var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync("./content/fourth.txt", "utf8");
    // res.end(text);
    const filestream = fs.createReadStream("./content/fourth.txt", "utf8");
    filestream.on("open", () => {
      filestream.pipe(res);
    });
    filestream.on("error", (err) => {
      console.log(err);
    });
  })
  .listen(5000);
