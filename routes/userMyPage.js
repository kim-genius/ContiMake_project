const conn = require("../config/database");
const express = require("express");
const router = express.Router();

//패스워드 인증
router.post("/vaildpassword", (req, res) => {
  const { password, email } = req.body;
  console.log(password, email);
  sql = "select * from t_user where user_email = ? and user_password = ?";
  conn.query(sql, [email, password], (err, rows) => {
    console.log(rows.length);
    if (err) {
      res.send("err");
    } else if (rows.length > 0) {
      res.send("success");
    } else {
      res.send("fail");
    }
  });
});

//회원정보수정
router.post("/update", (req, res) => {
  let { email, password, nickName } = req.body;
  console.log("나오냐", email, password, nickName);
  if (password == 1) {
    let sql =
    "update t_user set user_nickname =? where user_email =?;";
  conn.query(sql, [nickName, email], (err, rows) => {
    console.log(rows);
    if (err) {
      res.send("err");
    } else if (rows.affectedRows > 0) {
      res.json("success");
    } else {
      res.json("fail");
    }
  });

  } else {
    let sql =
      "update t_user set user_password = ? , user_nickname =? where user_email =?;";
    conn.query(sql, [password, nickName, email], (err, rows) => {
      console.log(rows);
      if (err) {
        res.send("err");
      } else if (rows.affectedRows > 0) {
        res.json("success");
      } else {
        res.json("fail");
      }
    });
  }
});

//회원탈퇴
router.post("/withdrawl", (req, res) => {
  console.log("회원탈퇴");
  let { email } = req.body;
  const sql = "delete from t_user where user_email = ?";
  conn.query(sql, [email], (err, rows) => {
    if (err) {
      res.send("err");
    } else if (rows.affectedRows > 0) {
      res.send("success");
    } else {
      res.send("fail");
    }
  });
});
module.exports = router;
