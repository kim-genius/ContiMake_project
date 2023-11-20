const express = require('express');
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

module.exports = router;