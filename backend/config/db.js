const mysql = require("mysql2");

const connection = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "",

  database: "hierarchy_db"

});


connection.connect((error) => {

  if (error) {

    console.log(
      "Database Connection Failed"
    );

    console.log(error);

  }

  else {

    console.log(
      "MySQL Database Connected"
    );

  }

});


module.exports = connection;