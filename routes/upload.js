const express = require('express');
const app = express();
const router = express.Router()
const path = require('path')
const conn = require('../config/database');
router.use(express.static("Images"));

const multer = require('multer')
const { S3Client } = require('@aws-sdk/client-s3')
const multerS3 = require('multer-s3')
const s3 = new S3Client({
    region: 'ap-northeast-2',
    credentials: {
        accessKeyId: 'AKIA4BH6VEOKXFYAIKNA',
        secretAccessKey: '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'
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


// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, "final-project/public/images/");
//         },
//         filename: function (req, file, cb) {
//             cb(null, new Date().valueOf() + path.extname(file.originalname));
//         },
//     }),
// });

// router.post("/submit", upload.array("file",3) 
// input의 name 속성을 써줌 (file) , (3)=> 최대 업로드 갯수 설정도 가능함 req.files로 들어있음

router.post("/submit", upload.single("file"), (req, res) => {
    console.log(req.file, "파일");
    console.log(req.body.email)
    const user_profilpath = req.file.path;
    const user_email = req.body.email

    let sql = 'UPDATE t_user SET user_profilpath = ? WHERE user_email = ?'

    conn.query(sql, [user_profilpath, user_email], (err, result) => {
        if (err) {
            console.log(err);
            res.
                status(500).send("Internal Server Error");
        } else {
            res.send("userlist values inserted");
        }
    });

});

module.exports = router; 