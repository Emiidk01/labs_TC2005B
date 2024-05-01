const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();
// Agregamos la conexión con el controlador
const controller = require("../controllers/preguntas.controller.js")

router.get('/obtener_preguntas', controller.index);

module.exports = router;