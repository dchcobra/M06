document.getElementById("titulo").innerHTML = "Los videojuegos de David";

var anchors = document.getElementsByClassName("navigation-link");

for (var i = 0; i < anchors.length; i++) {
    anchors[i].href = "http://www.google.com";
}

var imgs = document.getElementsByName("paisaje");

for (var i = 0; i < imgs.length; i++) {
    imgs[i].alt = "logro desbloqueado";
}