const http    = require('http');
const express = require('express');
const path = require('path');
const fs   = require('fs');
const app     = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("URL index /");
});

app.get('/welcome', (request, response, next) => {
    response.setHeader('Context-Type', 'text/html');
    const welcome_html = fs.readFileSync(path.resolve(__dirname, './welcome.html'), 'utf-8')
    response.write(welcome_html);
    response.end();
});

app.get('/smiths', (request, response, next) => {
    response.setHeader('Context-Type', 'text/html');
    const smiths_html = fs.readFileSync(path.resolve(__dirname, './smiths.html'), 'utf-8') 
    response.write(smiths_html);
    response.end();
});

app.get('/preguntas',(request, response, next) => {
    response.setHeader('Context-Type', 'text/html');
    const preguntas_html = fs.readFileSync(path.resolve(__dirname, './preguntas.html'), 'utf-8')
    response.write(preguntas_html);
    response.end();
});

const rutasFormulario = require('./routes/formulario.routes');
app.use('/formulario', rutasFormulario);

app.use((request, response, next) => {
  console.log('Otro middleware!');
  response.status(404);
  response.send('¡Page Not Found!'); //Manda la respuesta
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);