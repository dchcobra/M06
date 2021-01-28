// Llama a las funciones que se le escriban dentro de la funcion anonima una vez cargada la pagina
$( document ).ready(function() {
    //alertMoreThan2Divs(); // EJ 2 
    //insertTagsBr("<br>"); // EJ 3
    //replaceText(); // EJ 4
});

// Alerta con mensaje de que se ha cargado y esta lista
function windowAlertLoad() {
    window.alert("Página cargada y lista !");
}

// Alerta cuando hay mas de 2 divs en el DOM
function alertMoreThan2Divs() {
    if (($('div').length) >= 2) {
        window.alert("Ser el elegido es como estar enamorado,nadie te dice si lo estás o no, solamente lo sabes, al cien por cien, de la cabeza a los pies");
    }
}

// Inserta el tag que tu le introduzcas como parametro antes y despues del tag que tenga como id #segundo
function insertTagsBr(tag) {
    ($('#segundo')).after(tag).before(tag);
}

// Reemplaza el texto Super Mario Odissey a Fallout 4
function replaceText() {
    $('li:contains("Super Mario Odissey")').text("Fallout 4");
}

function replaceTextAdv() {
    $("li").text(function() {
        return $(this).text().replace("Super Mario Odissey", "Fallout 4")
    })
}

function deleteFirst() {
    if ($('li')[0]) {
        $('li')[0].remove();
    } else {
        window.alert('No se puede eliminar nada');
    }
}

function deletePosition(position) {
    if ($('li')[0]) {
        $('li')[$('input[name=elementToDelete]').val()].remove();
    } else {
        window.alert('No hay nada en esa posicion');
    }
}

function createLastElement() {
    const lastnum = ($('li').last().text());
    ($('li').last().append('<li>' + lastnum * 2 + '</li>'))
}