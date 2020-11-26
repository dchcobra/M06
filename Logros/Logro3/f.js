let $note;
let $noteText;

function inputText() {
    $note = prompt("Introduce tu nota");
}

function notaxNumToText() {
    if ($note >= 0 && $note <= 4 && $note.length > 0) {
        $noteText = "Insuficiente";
        showText();
    } else if ($note >= 5 && $note <= 6) {
        $noteText = "Suficiente";
        showText();
    } else if ($note >= 7 && $note <= 8) {
        $noteText = "Notable";
        showText();
    } else if ($note >= 9 && $note <= 10) {
        $noteText = "Excelente";
        showText();
    } else {
        messageError();
    }
}

function showText() {
    document.write($noteText);
}
/*
function messageError() {
    document.write("No has introducido una nota entre 0 y 10");
}
*/ 