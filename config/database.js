// 내가 연결할 DB에 대한 정보ss
const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '10040415',
    port: 3306,
    database: 'consoup'
});
conn.connect();

module.exports = conn;