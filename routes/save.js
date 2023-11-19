const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const router = express.Router();

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
    const fileName = req.body.title + '.corn' || '제목없음.corn'; // 파일명이 없으면 기본값으로 설정
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

router.get('/readFile', (req, res) => {
    // 파일 읽기
    const fileName = 'yourFileName.corn';

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('File read successfully');
            res.send(data);
        }
    });
});


module.exports = router;

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
