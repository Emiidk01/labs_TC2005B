const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

// El engine para usar ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Para poder usar body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Para crear la configuracion de la carpeta publica 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response, next) => {
   response.render('welcome')
});

app.get('/home', (request,response, next) => {
    response.render('home')
});

app.get('/smiths', (request,response, next) => {
    response.render('smiths')
});

app.get('/preguntas', (request,response, next) => {
    response.render('preguntas')
}); 

const rutasFormulario = require('./routes/formulario.routes');
app.use('/formulario', rutasFormulario);

app.use((request, response, next) => {
    response.status(404);
    response.send('¡404: Page Not Found!');
  });

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);