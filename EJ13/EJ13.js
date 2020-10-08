function resultado (){
    let vocales = ["a", "e", "i", "o", "u"];
    let char = document.getElementById('campo').value;

    if (char.charCodeAt(0)>=48 && char.charCodeAt(0)<57) {
        document.getElementById('result').innerHTML="Soy un numero";
    } else if (vocales.indexOf(char.toLowerCase()) != -1) {
        document.getElementById('result').innerHTML="Soy una vocal";
    } else if ((char.charCodeAt(0)>=65 && char.charCodeAt(0)<90) || (char.charCodeAt(0)>=97 && char.charCodeAt(0)<122)) {
        document.getElementById('result').innerHTML="Soy una letra";
    } else {
        document.getElementById('result').innerHTML="Soy un símbolo";
    }
}