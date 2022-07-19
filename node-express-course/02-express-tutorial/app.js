const express = require("express");
const app = express();

const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

const people = require("./routes/people");
const auth = require("./routes/auth");

// app.use("/api", logger);
// app.use([authorize, logger]);

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

// const app = require("express")()
