//Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria.
// Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el
// usuario en escribir la respuesta.
"use strict"

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let num1 = random(1,10);
let num2 = random(1,10);

let begin = new Date();

let answer = parseInt (prompt(`${num1} + ${num2} = `));

let result = num1 + num2;

let final = new Date();

let time = final.getTime() - begin.getTime();

let seg = time / 1000;

(result === answer ? document.write("Correct!") : document.write("Incorrect!"))

alert(`Te has tardado ${seg} segundos en contestar!`);





