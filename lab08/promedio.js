// Ejercicio 01
function promedio(nums) {
    let suma = 0;
    let promedio = 0;
    for(let i = 0; i <= nums.length - 1; i++){
        suma = suma + nums[i]
    }
    promedio = suma / nums.length;
    return promedio;
}

let arreglo = [1,2,3,4,5];

console.log(promedio(arreglo));
