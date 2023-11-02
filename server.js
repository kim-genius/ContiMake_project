// const express = require('express');
// const app = express();
// const nodemailer = require('nodemailer');
// // const badyParser = require('body-parser');

// // const indexRouter = require('./routes');
// // const userRouter = require('./routes/user');

// const path = require('path');

// const cors = require('cors');
// const bodyParser = require('body-parser');

// app.use(cors());

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// app.use(express.static(path.join(__dirname, 'react-project', 'build')))

// // app.use('/', indexRouter);
// // app.use('/user', userRouter);

// app.get('/', () => {
//     resizeBy.send('welcome to my forma')
// })

// app.post('/api/forma', (req, res) => {
//     console.log('hi', req.body.email)
//     let data = req.body
//     let smtpTransport = nodemailer.createTransport({
//         service: 'Gmail',
//         port: 465,
//         auth: {
//             user: 'hsring23@gmail.com',
//             pass: 'dkdltm812!'
//         }
//     });
//     let mailOptions = {
//         from: data.email,
//         to: 'hsring23@gmail.com',
//         subject: `Message from ${data.name}`,
//         html: `

//     <h3>Informations</h3>
//     <ul>
//     <li>Name : ${data.name}></li>
//     <li>Name : ${data.lastname}></li>
//     <li>Name : ${data.email}></li>
//     </ul>

//     <h3>Message</h3>
//     <p>${data.message}</p>

//     `
//     };
//     smtpTransport.sendMail(mailOptions, (error, response) => {

//         if (error) {
//             console.log('이거되냐? 실패')
//             res.send(error)
//         } else {
//             console.log('이거되냐? 성공')
//             res.send('Success')
//         }
//     })

//     smtpTransport.close();
// })

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//     console.log(`port waiting... 🐼 ${PORT}`)
// });

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const path = require('path');

const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'react-project', 'build')));

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
        to: 'jae2942@gmail.com',
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

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`port waiting... 🐼 ${PORT}`);
});