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
    informacion[0] = nombre.value
    informacion[1] = apellido.value
    informacion[2] = email.value
    informacion[3] = tel.value
    informacion[4] = consultaUser.value

    let blob = new Blob([informacion], {type:"text/plain;charset=utf-8"})
    saveAs(blob,"consulta.txt")
});