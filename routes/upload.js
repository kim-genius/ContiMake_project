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
            cb(null, "uploads/");
        },
        filename: function (req, file, cb) {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        },
    }),
});

router.post("/submit", upload.single("file"), (req, res) => {
    console.log(req.files, "레큐파일");
    console.log(req.body, "레큐바디");
    console.log(req.file.originalname);
    const profile = req.file;

    console.log(req.file, "파일");

    let sql = "insert into t_user values( ?,?,?,?,?)";
    conn.sql(
        [profile],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("userlist values inserted");
            }
        }
    );
});

module.exports = router; 