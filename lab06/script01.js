
function verificarPassword(pw1,pw2) {
    if (pw1 == '' || pw2 == ''){
        alert("Parece que tienes un espacio sin llenar!");
    }
    else if (pw1 === pw2){
        alert("La contraseña coincide");
    }
    else{
        alert("Las contraseñas no coinciden!");
    }
}

const boton = document.getElementById("btn");

boton.addEventListener("click", () => {
    const passw1 = document.getElementById("password1").value;
    const passw2 = document.getElementById("password2").value;

    verificarPassword(passw1, passw2)
    
});

const ayuda = document.querySelector("h1");

ayuda.addEventListener("dblclick", () => {
    let newH4 = document.createElement("h4");
    newH4.textContent = "Este es un programa para validar si dos contraseñas coinciden";
    document.body.appendChild(newH4);
});