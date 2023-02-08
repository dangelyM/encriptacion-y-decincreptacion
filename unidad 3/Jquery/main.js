//mostrar y ocultar utilizando Javascrip
//Buscar o ubicar elemento por su id
let boton1 = document.getElementById("btnocultar");
let boton2 = document.getElementById("btnmostrar");

boton1.onclick = ocultartexto;
boton2.onclick = mostrartexto;

function ocultartexto(){
    document.getElementById("parrafo").style.display = 'none';
};

function mostrartexto(){
    document.getElementById("parrafo").style.display = 'block';
};


// mostar y ocultar utilizando Jquary

$(document).ready(function () {
    $("#btnocultar2").click(function () {
        $("#parrafo").hide();
    })

})
$(document).ready(function(){
    $("#btnmostrar2").click(funtion (){
        
    })

})