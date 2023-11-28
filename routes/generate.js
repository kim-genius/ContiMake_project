const { promiseConn } = require("../config/database");
const express = require("express");
const router = express.Router();

router.post("/save", async (req, res) => {
  console.log("실행됨 ㄷㄷ");
  let { email, title, images, prompts } = req.body;
  let sql = "insert into t_project(project_title,user_email) values(?,?)";

  try {
    const [rows1] = await promiseConn.query(sql, [title, email]);

    if (rows1.affectedRows > 0) {
      let sql2 =
        "select project_idx from t_project where user_email = ? order by project_idx desc limit 1";
      const [rows2] = await promiseConn.query(sql2, [email]);
      if (images.length > 0) {
        let sql3 =
          "insert into t_img (project_idx, img_path, img_prompt, created_at) values(?,?,?,Now())";
        let promises = images.map((image, i) => {
          return promiseConn.query(sql3, [
            rows2[0].project_idx,
            image,
            prompts[i],
          ]);
        });
        await Promise.all(promises);
        res.send("success");
      }
    }
  } catch (err) {
    console.error(err);
    res.send("error");
  }
});

module.exports = router;
