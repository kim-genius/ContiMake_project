/* User와 관련된 Router 모음 
    - DB와 연결 가능 
    - 기능 : 회원가입, 아이디 중복체크, 로그인, 회원탈퇴, 로그아웃, 회원 검색
*/



const conn = require('../config/database')
const express = require('express');
const router = express.Router();
//로그인 기능
router.post('/login',(req,res)=>{
    let {email,password} = req.body
    let sql = 'select * from t_user where user_email = ? and user_password =?'
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
                    email : rows[0].user_email
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

})

module.exports = router; 
