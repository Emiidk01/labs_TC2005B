//Función: contador. Parámetros: Un arreglo de números. 
//Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de
// valores mayores a 0 en el arreglo.


"use strict"

let nums = [0,0,0,1,2,5,17,-3];

document.write("Este es el arreglo: " + nums + "<br>");

function contador(arreglo) {
    let cantNeg = 0;
    let cantCeros = 0;
    let cantPos = 0;

    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i] < 0){
            cantNeg += 1;
        }else if (arreglo[i] === 0){
            cantCeros += 1;
        }
        else{
            cantPos += 1;
        }
    }
    document.writeln("La cantidad de numeros negativos es: " + cantNeg + "<br>");
    document.writeln("La cantidad de numeros iguales a cero es: " + cantCeros + "<br>");
    document.writeln("La cantida de numeros positivos es: " + cantPos + "<br>");
}

contador(nums);

