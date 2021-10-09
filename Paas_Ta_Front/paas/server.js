const express = require('express');
const app = express();
const mysql = require("mysql");

app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database:"",
});

app.listen(3001, () => {
  console.log("running servers");
});
