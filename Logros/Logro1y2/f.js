let $nombre;

function pedirNombre() {
    $nombre = prompt("Introduce tu nombre");
}

function mostrarTextoBienvenida() {
    document.write("Bienvenido " + $nombre)
}

window.onload = pedirNombre();
window.onload = mostrarTextoBienvenida();