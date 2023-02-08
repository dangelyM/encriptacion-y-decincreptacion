function linkgenerado() {
    //generar un numero aleatorio
    let id = Math.round(Math.random() * 100);
    return `https://picsum.photos/id/${id}/info`;
}
//Manipulacion con DOM = HTML
function abc(data) {
    let div = $("<div></div>");
    div.addClass("card");


    let img = $("<img></img>");
    img.addClass("card-img");   

    img.attr("src", data.download_url);

    div.append(img);

    let autor = $("<h3></h3>");
    autor.addClass("card-title");
    autor.append(data.author);

    div.append(autor);
    let id = $("<p></p>");
    id.addClass("id")
    id.append (data.id);

    div.append (id);

    $('#imagenes-contenedor').append(div);
}

function getPic() {
    //consumir API
    $.ajax({
        type: 'GET',
        url: linkgenerado(),
        dataType: "json",
        async: true,
        success: function (data) {
            abc(data)
        },
    });
}
///bucle
$(document).ready(function () {
    for (let i = 0; i <= 9; i++) {
        getPic();
    }

})
