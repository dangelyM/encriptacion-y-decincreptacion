function ingresar() {

    var passwordsistema = '123456789'
    var mensajeerror = 'contraseña incorrecta'
    var password = document.getElementById("password").value;
    var nombreusser = document.getElementById("nombre").value

    if (password == passwordsistema) {
        document.getElementById("error").innerHTML = " ";
        location.href = "opciones.html";
        localStorage.setItem("nombre", nombreusser);

    } else {

        document.getElementById("error").innerHTML = mensajeerror;
    }
    
}


function muestra() {
    document.getElementById("saludo").innerHTML += localStorage.getItem("nombre");
}
muestra();


function redireccion1() {
    location.href = "encriptar.html"

}
function redireccion2() {
    location.href = "desencriptar.html"
}

function encriptar() {
    var mensaje = document.getElementById("mensaje").value;
    var mensajeencriptado = btoa(mensaje);
    document.getElementById("msjencript").innerHTML = mensajeencriptado;

}
function desencriptar() {
    var mensajecodigo = document.getElementById("msgcodigo").value;
    var mensajedesencriptado = atob(mensajecodigo);

    document.getElementById("msjreal").innerHTML = mensajedesencriptado;
}



