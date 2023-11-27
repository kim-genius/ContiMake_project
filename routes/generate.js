const conn = require("../config/database");
const express = require("express");
const router = express.Router();

router.post('/save',(req,res)=>{

    console.log(req.body);
    let {email, title, images} = req.body

    let sql = 'insert into t_project(project_title,user_email) values(?,?)'

    conn.query(sql,[title,email],(err,rows)=>{
        console.log(title);
        console.log(email);
        if(err){
            res.send('err')
        }
        else if(rows.affectedRows>0){
            res.send('success')
        }
    })
})

module.exports = router;