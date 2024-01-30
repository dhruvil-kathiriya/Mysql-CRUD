const connection = require("../config/mysql");

module.exports.home = async (req, res) => {
  let sql = "select * from Student";
  connection.query(sql, function (err, data, search) {
    if (err) {
      console.log(err);
    }
    return res.render("home", {
      stdData: data,
    });
  });
};

module.exports.search = async (req, res) => {
  let sql = `SELECT * FROM Student WHERE name LIKE '${req.body.name}%'`;
  connection.query(sql, function (err, data, search) {
    if (err) {
      console.log(err);
    }
    return res.render("home", {
      stdData: data,
    });
  });
};

module.exports.insertData = async (req, res) => {
  let sql = `insert into Student(id, name , email, password)VALUES ('${req.body.id}','${req.body.name}','${req.body.email}','${req.body.password}') `;
  connection.query(sql, function (err, std) {
    if (err) {
      console.log(err);
    }
    return res.redirect("/");
  });
};

module.exports.deleteRecord = async (req, res) => {
  let sql = `DELETE FROM Student WHERE id= '${req.params.id}'`;
  connection.query(sql, function (err, data) {
    if (err) {
      console.log(err);
    }
    return res.redirect("back");
  });
};

module.exports.updateRecord = async (req, res) => {
  let sql = `select * from Student where id='${req.params.id}' `;
  connection.query(sql, function (err, data) {
    if (err) {
      console.log(err);
    }
    return res.render("update", {
      upData: data[0],
    });
  });
};

module.exports.editrecord = async (req, res) => {
  let sql = `UPDATE Student SET name = '${req.body.name}', email = '${req.body.email}',password = '${req.body.password}' WHERE id = '${req.body.editId}';`;

  connection.query(sql, function (err, data) {
    if (err) {
      console.log(err);
    }
    return res.redirect("/");
  });
};
