"use strict";


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let tel = document.getElementById("tel");
let consultaUser = document.getElementById("consultaUser");
let btnEnviar = document.getElementById("btnEnviar");
let informacion = [];


btnEnviar.addEventListener("click", (event) => {
   
event.preventDefault();
//Enviar informacion para guardarla en un txt
if (validarFormulario()){
    informacion[0] = nombre.value
    informacion[1] = apellido.value
    informacion[2] = email.value
    informacion[3] = tel.value
    informacion[4] = consultaUser.value

    let blob = new Blob([informacion], {type:"text/plain;charset=utf-8"})
    saveAs(blob,"consulta.txt")}
});

//Funcion para validar formulario
function validarFormulario() {
    let camposValidos = true;
    let mensajesError = [];

    if (nombre.value.trim() === "") {
        mensajesError.push("El nombre es obligatorio.");
        camposValidos = false;
    }
    if (apellido.value.trim() === "") {
        mensajesError.push("El apellido es obligatorio.");
        camposValidos = false;
    }
    if (email.value.trim() === "") {
        mensajesError.push("El email es obligatorio.");
        camposValidos = false;
        }else if (validarEmail(email.value)===false) {
            mensajesError.push("El email no tiene un formato válido.");
            camposValidos = false;
            }

    if (tel.value.trim() === "") {
        mensajesError.push("El teléfono es obligatorio.");
        camposValidos = false;
    } else if (validarTelefono(tel.value)===false) {
        mensajesError.push("El teléfono no tiene un formato válido.");
        camposValidos = false;
    }

    if (consultaUser.value.trim() === "") {
        mensajesError.push("La consulta es obligatoria.");
        camposValidos = false;
    }

        if (camposValidos===false) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: mensajesError.join("\n"),
            });
        }

    return camposValidos;
}

// Función para validar el formato del email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para validar el formato del teléfono
function validarTelefono(tel) {
    const regex = /^\d{10,}$/;
    return regex.test(tel);
}