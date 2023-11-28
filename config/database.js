// 내가 연결할 DB에 대한 정보ss
const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: "project-db-stu3.smhrd.com",
  user: "Insa4_JSB_final_2",
  password: "aishcool2",
  port: 3307,
  database: "Insa4_JSB_final_2",
  connectionLimit: 10
});

conn.connect()

const promiseConn = mysql
  .createPool({
    host: "project-db-stu3.smhrd.com",
    user: "Insa4_JSB_final_2",
    password: "aishcool2",
    port: 3307,
    database: "Insa4_JSB_final_2",
    connectionLimit: 10,
  })
  .promise();

module.exports = { conn, promiseConn };