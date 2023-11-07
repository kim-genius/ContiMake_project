const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const userLoginRouter = require('./routes/userLogin');
const exportsRouter = require('./routes/exports');
const multerS3 = require('multer-s3');

const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3001;




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/userLogin', userLoginRouter);
app.use('/exports', exportsRouter);

app.use(express.static(path.join(__dirname, 'final-project', 'build')));

app.listen(PORT, () => {
    console.log(`port waiting... 🐼 ${PORT}`);
});
