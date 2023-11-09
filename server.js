const express = require('express');
const app = express();
const indexRouter = require('./routes');
const kakaoRouter = require('./routes/userKakao');
const userRouter = require('./routes/user');
const userJoinRouter = require('./routes/userJoin')
const userLoginRouter = require('./routes/userLogin');
const exportsRouter = require('./routes/exports');
const uploadRouter = require('./routes/upload');

const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/userJoin', userJoinRouter);
app.use('/kakao', kakaoRouter);
app.use('/userLogin', userLoginRouter);
app.use('/exports', exportsRouter);
app.use('/upload', uploadRouter);
app.use(express.static(path.join(__dirname, 'final-project', 'build')));

app.listen(PORT, () => {
    console.log(`port waiting... 🐼 ${PORT}`);
});
