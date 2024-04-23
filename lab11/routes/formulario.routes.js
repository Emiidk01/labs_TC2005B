const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/login', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const login_html = fs.readFileSync(path.resolve(__dirname, './../form.html'), 'utf-8')
    response.write(login_html);
    response.end();
});

router.post('/login', (request, response, next) => {
    let body = [];
    request
    .on('data', chunk => {
        body.push(chunk);
    })
    .on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);

        const username = request.body.username;
        console.log(username);
        const password = request.body.password;
        console.log(password);

        response.setHeader('Content-Type', 'application/json');
        response.statusCode = 200;
        response.write('{code:200, msg:"Ok POST"}');
        response.end();
    });
});


module.exports = router;
