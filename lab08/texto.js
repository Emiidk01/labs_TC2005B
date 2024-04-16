// Ejercicio 02
const fs = require('fs');

function stringAtexto(str) {
    fs.writeFile('archivo.txt',str,(err) =>{
        if (err) throw err; 
        console.log("El archivo se ha escrito correctamente!");
    }); 
}

let texto = "holamundo";

stringAtexto(texto);

