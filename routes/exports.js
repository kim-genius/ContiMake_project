const express = require('express');
const app = express();
const router = express.Router();
const nodemailer = require('nodemailer');
// const conn = require('../config/database');

const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

app.use(passport.initialize())
app.use(session({
    secret: '암호화에 쓸 비번',
    resave: false,
    saveUninitialized: false
}))

router.post('/api/forma', (req, res) => {
    console.log('hi', req.body.email);
    let data = req.body;

    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'hsring23@gmail.com', // Gmail 계정 정보 입력
            pass: 'oiky dwgc zrhx ebto', // Gmail 비밀번호 입력
        },
    });

    let mailOptions = {
        from: data.email,
        to: data.email,
        // subject: `Message from ${data.name}`,
        html: `
            <h3>Informations</h3>
            <ul>
                <li>Name : ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
            <img src='https://newsimg.sedaily.com/2022/02/10/26237A7W2N_2.jpg'></img>
        `,
    };

    smtpTransport.sendMail(mailOptions, (err, res) => {
        if (err) {
            console.log('실패', err);
            res.status(500).send('Email sending failed');
        } else {
            console.log('성공');
            
            res.send('Success');
        }
    });

    smtpTransport.close();
});

const { TIMEOUT } = require('dns');

// router.get('/myconti/:id', async (req, res) => {
//     // 1번~5번글을 찾아서 result변수에 저장
//     let result = await db.collection('post').find().skip((req.params.id - 1)*5).limit(5).toArray()
//     res.render('myconti.jsx', { posts: result })
//     console.log(result)
// })np


module.exports = router; 