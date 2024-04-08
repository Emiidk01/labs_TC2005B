// Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses,
// alguna problemática que hayas identificado en algún ámbito, un problema de programación que hayas 
// resuelto en otro lenguaje, un problema de la ACM, entre otros).
// El problema debe estar descrito en un documento HTML, y la solución implementada en JavaScript, 
// utilizando al menos la creación de un objeto, el objeto además de su constructor deben tener al 
// menos 2 métodos. Muestra los resultados en el documento HTML.

"use strict"

// Una clase llamada Rectangulo que tenga los siguientes atributos: largo y ancho
// y los siguientes metodos: perimetros() y area()

// Clase
class Rectangulo {
    constructor(largo, ancho){
        this.largo = largo;
        this.ancho = ancho;
    }
    perimetro(){
        return (this.largo + this.ancho) * 2;
    }
    area(){
           return this.largo * this.ancho;
    }   
}

alert("Vamos a crear un rectangulo!");

let largoRect = parseFloat(prompt("Ingrese el largo (m): "));
let anchoRect = parseFloat(prompt ("Ingrese el ancho (m): "));

// Instanciar objeto
let rectangulo1 = new Rectangulo(largoRect, anchoRect);

document.write("<p>\nEl perimetro es: " + rectangulo1.perimetro() + " metros" + " y el área es: " + rectangulo1.area() + " metros cuadrados" + "</p>");



