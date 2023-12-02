const { conn, promiseConn} = require("../config/database");
const express = require("express");
const router = express.Router();

router.post("/save", async (req, res) => {
  let { email, title, images, prompts } = req.body;
  let sql = "insert into t_project(project_title,user_email) values(?,?)";
  conn.query(sql, [title, email],async (err,rows)=>{
    console.log("실행됨 ㄷㄷ");
    if (rows.affectedRows > 0) {
       if (images.length > 0) {
        let sql2 = "select project_idx from t_project where user_email = ? order by project_idx desc limit 1";
        const [rows2] = await promiseConn.query(sql2, [email]);
        console.log(rows2[0].project_idx);
        let sql3 = "insert into t_img (project_idx, img_path, img_prompt, created_at) values(?,?,?,Now())";
        for (let i = 0; i < images.length; i++) {
          const [imgRows] = await promiseConn.query(sql3, [rows2[0].project_idx, images[i], prompts[i]]);
          console.log(`Image ${i} inserted with ID ${imgRows.insertId}`);
        }
       }
       res.send("successed save project")
     }
  });
});

module.exports = router;

     