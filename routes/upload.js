const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const router = express.Router()
const path = require('path')
const conn = require('../config/database');
router.use(express.static("Images"));
const multer = require('multer')
const multerS3 = require('multer-s3')
const { S3Client } = require('@aws-sdk/client-s3')
require("dotenv").config()

const s3 = new S3Client({
    region: 'ap-northeast-2',
    credentials: {
        accessKeyId: process.env.REACT_APP_S3_KEY,
        secretAccessKey: process.env.REACT_APP_S3_SECRET,
    }
})

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'contistoryprompt',
        key: function (req, file, cb) {
            cb(null, Date.now().toString()) //업로드시 파일명 변경가능
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
})

router.post("/submit", upload.single("file"), (req, res) => {
    console.log(req.file, "파일");
    console.log(req.body.email)
    const user_profilepath = req.file.location;
    const user_email = req.body.email

    let sql = 'UPDATE t_user SET user_profilepath = ? WHERE user_email = ?'
    let sql2 = 'SELECT * FROM t_user WHERE user_email=?'
    conn.query(sql, [user_profilepath, user_email], (err, result) => {
        if (err) {
            console.log(err);
            res.
                status(500).send("Internal Server Error");
        } else {
            conn.query(sql2, [user_email], (err, rows) => {
                if (rows) {
                    console.log(rows)
                    res.json(rows[0].user_profilepath)
                } else if (err) {
                    console.log(err)
                    res.status(500).send("err")
                }
            })
        }
    });

});

router.post('/createFile', (req, res) => {
    const data = req.body.data;
    // 파일명이 없으면 기본값으로 설정
    const fileName = (req.body.title || '제목없음') + '.corn';
    console.log(data)
    console.log(fileName, '제목')

    // fs.writeFile(fileName, options, data.join('\n'), (err) => {
    fs.writeFile(fileName, data.join('\n'), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('File created successfully');
            res.send('File created successfully');
        }
    });
})

router.get('/readFile', (req, res) => {
    const parsedUrl = new URL(`http://localhost:3000${req.url}`);
    const queryData = parsedUrl.searchParams;

    const fileName = queryData.get('id');
    const filePath = path.join(__dirname, 'data', `${fileName}`);
    // const filePath = path.join(__dirname, 'data', `${fileName}.html`);

    // 파일 존재 여부 체크
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.send('파일을 찾을 수 없습니다');
            return;
        }

        // 파일 읽기
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.send('파일을 읽는 중 오류가 발생했습니다');
                console.error(err);
                return;
            }

            const template = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>WEB1 - ${title}</title>
                </head>
                <body>
                    <h1><a href="/">WEB</a></h1>
                    <ol>
                        <li><a href="/?id=HTML">HTML</a></li>
                        <li><a href="/?id=CSS">CSS</a></li>
                        <li><a href="/?ixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                          ds=JavaScript">JavaScript</a></li>
                    </ol>
                    <h2>${title}</h2>
                    <p>${bodyContent}</p>
                </body>c
                </html>
            `;
            res.send(template);
        });
    });
});

module.exports = router;