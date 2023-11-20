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

// try {
//     fstat.readdirSync('uploads');
// } catch (err) {
//     console.err('uploads 폴더가 없어 uploads 폴더를 생성함')
//     fstat.mkdirSync('uploads');
// }

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
    const user_profilpath = req.file.location;
    const user_email = req.body.email

    let sql = 'UPDATE t_user SET user_profilpath = ? WHERE user_email = ?'
    let sql2 = 'SELECT * FROM t_user WHERE user_email=?'
    conn.query(sql, [user_profilpath, user_email], (err, result) => {
        if (err) {
            console.log(err);
            res.
                status(500).send("Internal Server Error");
        } else {
            conn.query(sql2, [user_email], (err, rows) => {
                if (rows) {
                    console.log(rows)
                    res.json(rows[0].user_profilpath)
                } else if (err) {
                    console.log(err)
                    res.status(500).send("err")
                }
            })
        }
    });

});


// webp 확장자로 변환
// const sharp = require('sharp');

// const inputImagePath = 'path/to/your/image.jpg';  // 실제 입력 이미지의 경로로 대체하세요.
// const outputImagePath = 'path/to/your/output/image.webp';  // 출력 WebP 이미지를 저장할 경로로 대체하세요.

// sharp(inputImagePath)
//   .toFormat('webp')
//   .toFile(outputImagePath, (err, info) => {
//     if (err) {
//       console.error('이미지를 WebP로 변환하는 중 오류 발생:', err);
//     } else {
//       console.log('이미지가 성공적으로 WebP로 변환되었습니다:', info);
//     }
//   });

// router.post('/createFile', (req, res) => {
//     const data = req.body.data;
//     fs.writeFileSync('data.txt', data.join('\n'));
//     res.json({ success: true });
// });

// router.get('/readFile', (req, res) => {
//     const content = fs.readFileSync('data.txt', 'utf-8');
//     const lines = content.split('\n');
//     const data = lines.map(line => line.split(','));
//     res.json({ data });
// });


router.post('/createFile', (req, res) => {
    const data = req.body.data;
    // 파일명이 없으면 기본값으로 설정
    const fileName = (req.body.title || '제목없음') + '.corn';
    console.log(data)
    console.log(fileName, '제목')

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
// 파일 읽기
// router.get('/readFile', (req, res) => {
//     const fileName = 'yourFileName.corn';

//     fs.readFile(fileName, 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Internal Server Error');
//         } else {
//             console.log('File read successfully');
//             res.send(data);
//         }
//     });
// });

// const express = require('express');
// const multer = require('multer');
// const aws = require('aws-sdk');
// const fs = require('fs');
// const multerS3 = require('multer-s3')
// const { S3Client } = require('@aws-sdk/client-s3')
// const router = express.Router();
// require("dotenv").config()

// // AWS S3 설정

// const s3 = new S3Client({
//     region: 'ap-northeast-2',
//     credentials: {
//         accessKeyId: process.env.REACT_APP_S3_KEY,
//         secretAccessKey: process.env.REACT_APP_S3_SECRET,
//     }
// })


// // multer 설정
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'your-s3-bucket-name',
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString() + '-' + file.originalname); // 업로드시 파일명 변경가능
//     }
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

// // 라우터 설정
// router.post('/uploadFile', upload.single('file'), (req, res) => {
//   const data = req.body.data;
//   const fileName = req.file.key || '제목없음.corn'; // 파일명이 없으면 기본값으로 설정

//   console.log(data);
//   console.log(fileName, '제목');

//   // 여기서 필요에 따라 AWS S3에 저장된 파일의 URL을 클라이언트에 응답할 수 있습니다.
//   const fileUrl = `https://your-s3-bucket-name.s3-your-region.amazonaws.com/${fileName}`;
//   res.json({ success: true, fileUrl });
// });

// module.exports = router;

router.get('/readFile', (req, res) => {
    const parsedUrl = new URL(`http://localhost:3000${req.url}`);
    const queryData = parsedUrl.searchParams;

    const fileName = queryData.get('id');
    const filePath = path.join(__dirname, 'data', `${fileName}.html`);

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
        });
    });
});


module.exports = router;