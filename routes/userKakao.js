/* User와 관련된 Router 모음 
    - DB와 연결 가능 
    - 기능 : 회원가입, 아이디 중복체크, 로그인, 회원탈퇴, 로그아웃, 회원 검색
*/

const conn = require('../config/database')
const express = require('express');
const router = express.Router();


/**회원가입 기능 */
router.post('/kaokologin', (req, res) => {
    console.log(req.body)
    res.send('success')

})



module.exports = router; 
