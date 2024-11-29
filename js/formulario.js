let cedula = "";
let nombre = "";
let apellido = "";
let json="";

function guardarButton(){
    document.getElementById('cedula').innerText = cedula;
    document.getElementById('nombre').innerText = nombre;
    document.getElementById('apellido').innerText = apellido;
    
}

function jsonButton(){
    document.getElementById('jsontext').innerText = json;
}

