/* User와 관련된 Router 모음 
    - DB와 연결 가능 
    - 기능 : 회원가입, 아이디 중복체크, 로그인, 회원탈퇴, 로그아웃, 회원 검색
*/

const conn = require('../config/database')
const express = require('express');
const router = express.Router();


/**회원가입 기능 */
router.post('/join',(req,res)=>{
console.log(req.body)
let {email,password,nickname} = req.body
let sql = 'insert into t_user(user_email,user_password,user_nickname) values(?,?,?)'

conn.query(sql,[email,password,nickname],(err,rows)=>{
    if(err){
        res.send('err')
    }else if(rows.affectedRows>0){
        res.send('success')
    }else{
        res.send('fail')
    }
})})

/** 이메일 중복확인 */
router.post('/vaildEmail',(req,res)=>{
    let {email} = req.body
    let sql = 'select user_email from t_user where user_email = ?'
    conn.query(sql,[email],(err,rows)=>{
        console.log(rows.length)
        if(err){
            res.send('err')
        }else if(rows.length > 0){
            console.log('뭐가뜨냐',rows)
            res.send('invaild')
        }else{
            console.log('뭐가뜨냐2',rows)
            res.send('vaild')
        }
    })
})


module.exports = router; 
