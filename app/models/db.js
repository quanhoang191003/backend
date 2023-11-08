const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connection.connect((err) => {  
  if(!err) {  
      console.log("Db Connection Succeed");  
  }  
  else{  
      console.log("Db connect Failed \n Error :" + JSON.stringify(err,undefined,2));  
  }  
});  

module.exports = connection;
