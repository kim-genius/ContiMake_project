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

// 파일 저장
router.post('/createFile', upload.single('file'), (req, res) => {
    const { data, title } = req.body;

    // 이미지 파일 경로
    const imagePath = req.file.path;
    console.log(req.file.path);

    const fileName = (req.body.title || '제목없음') + '.corn';
    console.log(data)
    console.log(fileName, '제목')
    // TODO: 이미지를 DB에 저장하는 로직을 추가하세요.

    // 나머지 파일 생성 및 저장 로직은 이곳에 추가하세요.
    // data, title 등 활용하여 파일 생성
    fs.writeFile(fileName, data.join('\n'), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('File created successfully');
            res.send('File created successfully');
            res.json({ message: 'File created successfully' });
        }
    });
});

// 파일 읽기
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

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.send('파일을 읽는 중 오류가 발생했습니다');
                console.error(err);
                return;
            }

            // <h2> 태그 다음에 오는 <p> 태그에서 내용만 잘라내서 본문 내용으로 설정
            const startH2Index = data.indexOf('<h2>');
            const endH2Index = data.indexOf('</h2>');
            const startPIndex = data.indexOf('<p>', endH2Index);
            const endPIndex = data.indexOf('</p>', startPIndex);

            const title = data.substring(startH2Index + 4, endH2Index).trim();
            const bodyContent = data.substring(endH2Index + 5, startPIndex) +
                data.substring(endPIndex + 4);

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
                        <li><a href="/?id=JavaScript">JavaScript</a></li>
                    </ol>
                    <h2>${title}</h2>
                    <p>${bodyContent}</p>
                </body>
                </html>
            `;

            res.send(template);
            res.json({ data: 'File content' });
        });
    });
});


module.exports = router;