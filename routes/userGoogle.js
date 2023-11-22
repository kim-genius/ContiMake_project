
const conn = require('../config/database')
const express = require('express');
const router = express.Router();


/** 구글 계정 등록여부 확인 - 등록되어있을시 바로 로그인 */
router.post('/googlelogin', (req, res) => {
    console.log('구글계정 등록 여부 확인중..')
    console.log(req.body)
    let { email, nickname, profileImage } = req.body
    let sql = 'select user_email from t_user where user_email = ?'
    console.log('nickname', nickname, 'email', email);

    conn.query(sql, [email], (err, rows) => {

        if (err) {
            console.log(err);
            res.send('fail')

        } else if (rows.length > 0) {
            res.send('login')

        } else {
            /** 구글 계정으로 회원가입 */
            let password = 1234
            let sql2 = 'insert into t_user(user_email,user_password,user_nickname, user_profilepath) values(?,?,?,?)'

            conn.query(sql2, [email, password, nickname, profileImage], (err, rows) => {
                console.log('dd', rows, 'email', email);

                if (err) {
                    console.log(err);
                    res.send('fail')
                } else {
                    res.send('join')
                    console.log('join')
                }
            })
        }
    })
})




module.exports = router; 
