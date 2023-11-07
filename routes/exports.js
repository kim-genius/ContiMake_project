const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const nodemailer = require('nodemailer');
// const conn = require('../config/database');

const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer')
const multerS3 = require('multer-s3')

const s3 = new S3Client({
  region : 'ap-northeast-2',
  credentials : {
      accessKeyId : 'AKIA4BH6VEOK2XFMALPZ',
      secretAccessKey : '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'
  }
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'contistoryprompt',
    key: function (요청, file, cb) {
      cb(null, Date.now().toString()) //업로드시 파일명 변경가능
    }
  })
})

app.use(passport.initialize())
app.use(session({
secret: '암호화에 쓸 비번',
resave : false,
saveUninitialized : false
}))


router.post('/fileupload', upload.single('img1'), async (req, res) => {
    
    console.log('하엥')
    // console.log(req.file)
    try {
        if (req.body.title == '') {
            res.send('제목입력안했는데?')
        } else {
            await db.collection('post').insertOne({ title: req.body.title, content: req.body.content })
            res.redirect('/myconti')
        }

    } catch (e) {
        console.log(e) // 에러메시지 출력해줌
        res.status(500).send('서버에러남')
    }
})


// router.get('/', (req, res) => {
//     res.send('welcome to my forma');
// });

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
        to: 'hsring23@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
            <h3>Informations</h3>
            <ul>
                <li>Name : ${data.name}</li>
                <li>Name : ${data.lastname}</li>
                <li>Name : ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
        `,
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        console.log('에러ㅠㅠㅠ', error);
        if (error) {
            console.log('이거되냐? 실패', error);
            res.status(500).send('Email sending failed');
        } else {
            console.log('이거되냐? 성공');
            res.send('Success');
        }
    });

    smtpTransport.close();
});

const { TIMEOUT } = require('dns');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // 업로드된 파일이 저장될 디렉토리
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // 파일 이름 생성
    },
});


// router.get('/myconti/:id', async (req, res) => {
//     // 1번~5번글을 찾아서 result변수에 저장
//     let result = await db.collection('post').find().skip((req.params.id - 1)*5).limit(5).toArray()
//     res.render('myconti.jsx', { posts: result })
//     console.log(result)
// })


module.exports = router; 