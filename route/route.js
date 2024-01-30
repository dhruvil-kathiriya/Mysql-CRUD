const express = require("express");
const studentcontroller = require("../controller/studentcontroller");

const route = express.Router();

route.get("/", studentcontroller.home);

route.get("/search", studentcontroller.search);

route.post("/insertData", studentcontroller.insertData);

route.get("/deleteRecord/:id", studentcontroller.deleteRecord);

route.get("/updateRecord/:id", studentcontroller.updateRecord);

route.post("/editrecord", studentcontroller.editrecord);

module.exports = route;
