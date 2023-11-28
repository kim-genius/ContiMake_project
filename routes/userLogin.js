
const {conn} = require('../config/database')
const express = require('express');
const router = express.Router();
//로그인 기능
router.post('/login',(req,res)=>{
    let {email,password} = req.body
    let sql = 'select * from t_user where user_email = ? and user_password =?'
    console.log(email,password)
    conn.query(sql,[email,password],(err,rows)=>{
        if(err){
            res.send('err')
        }else if(rows.length>0){
            console.log(rows[0])
            req.session.user = rows[0];
            req.session.save(()=>{
                // res.send('success');
                if(err){res.send('fail')}
                else{
                res.json({
                    msg : 'success', 
                    nickname : rows[0].user_nickname, 
                    email : rows[0].user_email,
                    location:rows[0].user_profilepath
                })
            }
            })

        }else{
            res.send('invaild')
        }
    })
})


//로그아웃 기능
router.post('/logout',(req,res)=>{
    console.log('로그아웃 완료')
    req.session.destroy()
    res.send('success')

})

module.exports = router; 
