
// 1: Entrada: un número pedido con un prompt. 
// Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
// Utiliza document.write para producir la salida

"use strict";
let num = prompt ("Digita un numero: ");

for (let i = 1; i <= num; i++){
    document.write("Cuadrado -->" + i**2)
    document.write("\nCubo -->" + i**3)
}
