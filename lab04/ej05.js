// Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.

"use strict"

function inverso(num) {
    num = String(num);
    let numInverso = "";
    for(let i = num.length - 1; i >= 0; i--){
        numInverso += num[i];
    }
    numInverso = Number(numInverso);
    return numInverso;
}

let numero = prompt("Ingresa un numero para obtener su inverso: ");

alert(`\nEste es el numero inverso: ${inverso(numero)}`);