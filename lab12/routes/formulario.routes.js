const express = require('express');
const bodyParser = require('body-parser');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/login', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const login_html = fs.readFileSync(path.resolve(__dirname, './../views/form.html'), 'utf-8')
    response.write(login_html);
    response.end();
});

router.post('/login', (request, response, next) => {
    const username = request.body.username;
    const password = request.body.pw;

    console.log('Username:', username);
    console.log('Password:', password);

    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.send({ code: 200, msg: 'Ok POST' });
});

module.exports = router;
