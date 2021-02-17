var texto = document.getElementsByTagName("p");

for (var i = 0; i < texto.length; i++) {
    if (texto[i].parentElement.tagName == "ARTICLE")  {
        texto[i].innerHTML = "David Castilla Henares"
    }
}
