const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3001;



const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const exportsRouter = require('./routes/exports');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/exports', exportsRouter);

app.use(express.static(path.join(__dirname, 'final-project', 'build')));

app.listen(PORT, () => {
    console.log(`port waiting... 🐼 ${PORT}`);
});
