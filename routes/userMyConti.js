const conn = require("../config/database");
const express = require("express");
const router = express.Router();

//마이콘티 출력
router.post("/contilist", (req, res) => {
    console.log(req.body)
    let {email} = req.body
    let sql = 'select * from t_project as A left outer join t_img as B on A.project_idx = B.project_idx where user_email =?';
    conn.query(sql,[email],(err,rows)=>{
        if(err){
            res.send('err')
        }else if(rows.length > 0){
            console.log(rows)
            res.json(rows)
        }
    })
});

module.exports = router;
