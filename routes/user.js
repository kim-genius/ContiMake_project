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
let sql = 'insert into user values(?,?,?)'

conn.query(sql,[email,password,nickname],(err,rows)=>{
    if(err){
        res.send('fail')
    }else{
        res.send('success')
    }
})})

/** 이메일 중복확인 */
router.post('/vaildEmail',(req,res)=>{
    console.log('hi')
    let {email} = req.body
    let sql = 'select user_email from user where user_email = ?'
    conn.query(sql,[email],(err,rows)=>{
        if(err){
            res.send('fail')
        }else if(rows.length > 0){
            res.send('success')
        }else{
            res.send('join')
        }
    })
})


module.exports = router; 
