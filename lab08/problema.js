// Problema: invertir un string

function invertirFrase(frase) {
    let fraseInvertida = "";
    for(let i = frase.length-1; i >= 0; i--){
        fraseInvertida += frase[i];
    }
    console.log(fraseInvertida);
}

let prueba1 = "hola mundo!!!"
console.log("Esta es la frase original: " + prueba1)
invertirFrase(prueba1);

