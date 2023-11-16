const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const router = express.Router();

router.use(bodyParser.json());

router.post('/createFile', (req, res) => {
    const data = req.body.data;
    fs.writeFileSync('data.txt', data.join('\n'));
    res.json({ success: true });
});

router.get('/readFile', (req, res) => {
    const content = fs.readFileSync('data.txt', 'utf-8');
    const lines = content.split('\n');
    const data = lines.map(line => line.split(','));
    res.json({ data });
});

module.exports = router; 