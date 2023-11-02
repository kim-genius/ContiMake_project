const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer')
const multerS3 = require('multer-s3')
const s3 = new S3Client({
    region: 'us-east-1',
    credentials: {
        accessKeyId: 'AKIA4BH6VEOKXFYAIKNA',
        secretAccessKey: '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'
    }
})

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'hansolproject',
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
})

app.post('/add', upload.single('img1'), async (req, res) => {

    console.log(req.file)

    try {
        if (req.body.title == '') {
            res.send('제목입력 안했는데?')
        } else {
            await db.collection('post').insertOne(
                {
                    title: req.body.title, content: req.body.content
                }

            )
            res.redirect('/list')
        }
    } catch (e) {
        console.log(e)
        res.status(500).send('서버에러남')
    }
}
)

const path = require('path');

const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'final-project', 'build')));


app.get('/', (req, res) => {
    res.send('welcome to my forma');
});

app.post('/api/forma', (req, res) => {
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

app.post('/upload', upload.single('file'), (req, res) => {

    res.json({ message: 'File uploaded successfully' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`port waiting... 🐼 ${PORT}`);
});

