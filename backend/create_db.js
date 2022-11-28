const mysql = require("mysql");

//connectie maken met sql server
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});

const dbName = "vinyl";
//database maken
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(`CREATE DATABASE ${dbName}`, (err, result) => {
      if (err) throw err;
      console.log("Database created");
    });
  });


//connectie maken met de database in de sql server
con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: `${dbName}`
});


//table maken
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });