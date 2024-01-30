const express = require("express");
const port = 8000;
const app = express();
const path = require("path");
const mysql = require("mysql");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());

app.use("/", require("./route/route"));

app.listen(port, (err) => {
  err ? console.log(err) : `Server is Running On Port ${port}`;
});
