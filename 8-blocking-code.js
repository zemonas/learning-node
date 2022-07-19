const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
  else if (req.url === "/about") {
      //BLOCKING CODE!!!
      for(let i=0;i<100;i++){
          for(let j=0;j<10000;j++){
          console.log(`${i},${j}`)
      }
      }
    res.end("About Page");
  }else{
  res.end("Hello World");
  }
});
server.listen(5000, (err) => {
    console.log(err)
  console.log("Listening on port 5000");
});
