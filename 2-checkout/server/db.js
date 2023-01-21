const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>


  // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(25),lastname VARCHAR(25),email VARCHAR(50),password VARCHAR(50),address_line1 VARCHAR(50),address_line2 VARCHAR(25),city VARCHAR(25),state VARCHAR(25),zipcode VARCHAR(10),phone_number VARCHAR(25),creditcard_number VARCHAR(20),expiry VARCHAR(10),cvv VARCHAR(10),billingzip VARCHAR(10),session_id VARCHAR(50));"
    )
  )
  .catch((err) => console.log(err));

module.exports = db;


// "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY)"