const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Definicion de las rutas
app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("Hola Mundo");
    response.end(); 
});

// Obtener Usuarios
const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);

// Preguntas
const rutasPreguntas = require('./routes/preguntas.routes');
app.use('/preguntas', rutasPreguntas);

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);