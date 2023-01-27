
function encriptar() {

    var passwordsistema = '123456789'
    var mensajeerror = 'contraseña incorrecta'

    var mensaje = document.getElementById("mensaje").ariaValueMax;
    var password = document.getElementById("password").value;

    //alert(mensaje + "" + password);

    if(password == passwordsistema) {
        //alert("contraseña correcta: ingresaste");
        document.getElementById("error").innerHTML=" ";

        var mensajeEncriptado=btoa(mensaje);
        //alert(mensajeEncriptado);
        document.getElementById("msjencript").innerHTML = mensajeEncriptado



    }else{
        //alert(mensajeerror);
        
        document.getElementById("error").innerHTML= mensajeerror;

        document.getElementById("error").classname = "alerta";
        
        document.getElementById("msjencript").innerHTML = " " ;
    }
}
function desencriptar (){
    var mensajecodigo = document.getElementById("msgcodigo").value;
    var mensajedesencriptado = atob(mensajecodigo);
    
    //alert("mensajedesencriptado");

    document.getElementById("msjreal").innerHTML = mensajedesencriptado;
}



