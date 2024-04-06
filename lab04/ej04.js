// Función: promedios. Parámetros: Un arreglo de arreglos de números. 
// Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

"use strict"

function promedios(arregloDeArreglos) {
    let arregloPromedios = [];

     for (let i = 0; i < arregloDeArreglos.length; i++) {
        let subarreglo = arregloDeArreglos[i];
        let suma = 0;
    
        for (let j = 0; j < subarreglo.length; j++){
            suma += subarreglo[j];
        }
        
        let promedio = suma / subarreglo.length;

        arregloPromedios.push(promedio);
     }

     return arregloPromedios;
}
    
let arregloPrueba = [[6,12,3],[7,8,3],[12,14,10]];
document.write("Este es el arreglo de arreglos de numeros: ", arregloPrueba, "<br>")
let resultado = promedios(arregloPrueba);
document.write("Promedios de cada subarreglo: ", "[" ,resultado ,"]"); 