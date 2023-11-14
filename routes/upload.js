const express = require('express');
const app = express();
const router = express.Router()
const path = require('path')
const conn = require('../config/database');
const multer = require("multer");
router.use(express.static("Images"));

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "final-project/public/images/");
        },
        filename: function (req, file, cb) {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        },
    }),
});

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