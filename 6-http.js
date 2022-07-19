const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello World");
  }
  if (req.url === "/about") {
    res.end("welcome to our homepage");
  }
  res.end(`
  <h1>OOps!!</h1>
  <p>Page not found</p>
  <a href="/">Go to Homepage</a>
  `);
});

server.listen(3000);
