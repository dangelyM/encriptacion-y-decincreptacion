function ingresar() {

    var passwordsistema = '123456789'
    var mensajeerror = 'contraseña incorrecta'
    var password = document.getElementById("password").value;


    if(password == passwordsistema) {

    document.getElementById("error").innerHTML=" ";
    location.href ="sistema.html"


    }else{
        
         document.getElementById("error").innerHTML= mensajeerror;
    }


}

function encriptar(){
var mensaje = document.getElementById("mensaje").value;
var mensajeencriptado = btoa(mensaje);
document.getElementById("msjencript").innerHTML = mensajeencriptado;

}
function desencriptar(){
    var mensajecodigo = document.getElementById("msgcodigo").value;
    var mensajedesencriptado = atob(mensajecodigo);

    document.getElementById("msjreal").innerHTML = mensajedesencriptado;
}
    


