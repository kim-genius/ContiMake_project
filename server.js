const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
// const badyParser = require('body-parser');

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const path = require('path');

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('port', process.env.PORT || 3001);

app.use(express.static(path.join(__dirname, 'react-project', 'build')))

app.use('/', indexRouter);
app.use('/user', userRouter);

app.get('/',()=>{
    resizeBy.send('welcome to my forma')
})

app.post('/api/forma',(req,res)=>{
    console.log(req.body)
    let data=req.body
    let smtpTransport=nodemailer.createTransport({
        service : 'Gmail',
        port : 465,
        auth : {
            user : 'jae2942@gmail.com',
            pass : 'xhfi ifyg twxc uqog'
        }
        });
let mailOptions={
    from : data.email,
    to : 'hsring23@gmail.com',
    subject : `Message from ${data.name}`,
    html : `
    
    <h3>Informations</h3>
    <ul>
    <li>Name : ${data.name}></li>
    <li>Name : ${data.lastname}></li>
    <li>Name : ${data.email}></li>
    </ul>

    <h3>Message</h3>
    <p>${data.message}</p>

    `
};
smtpTransport.sendMail(mailOptions, (error,response)=>{
        console.log(error)
    if(error){
        console.log('실패')
        res.send(error)
    } else {
        console.log('성공')
        res.send('Success')
    }
})
    
smtpTransport.close();
})


app.listen(app.get('port'), () => {
    console.log('port waiting... 🐼')
});