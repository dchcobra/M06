let forms = document.getElementsByTagName('form');
let lastFormElement = forms[0].lastElementChild;
let cursos = document.getElementsByName('cursos');
var lastCurso = cursos[cursos.length - 1];


for (curso of cursos) {
    curso.addEventListener('change', wraper);
}

function wraper(){
    if(lastCurso.checked){
        newElements('label', 'Especificar: ', forms[0]);
        newElements('input', 'undefined', forms[0]);
        newElements('br', 'undefined', forms[0]);
    } else {
        let previousElement = lastFormElement.previousElementSibling;
        destroyElements(previousElement);
        previousElement = lastFormElement.previousElementSibling;
        destroyElements(previousElement);
        previousElement = lastFormElement.previousElementSibling;
        destroyElements(previousElement);
    }
}

function newElements(tag, text, parent, attributes) {
    let element = document.createElement(tag);
    if(text) {
        let txtNode = document.createTextNode(text);
        element.appendChild(txtNode);
    }
    parent.appendChild(element);
    if(attributes){
        element.setAttribute(key, value);
    }
    parent.insertBefore(element, lastFormElement);
   /*  let element = document.createElement('label');
    element.appendChild(document.createTextNode("Especificar: "));
    forms[0].insertBefore(element, lastFormElement);

    let inputElement = document.createElement('input');
    inputElement.setAttribute("type","text");
    inputElement.setAttribute("name","otros_input");
    forms[0].insertBefore(inputElement, lastFormElement);

    let newLineElement = document.createElement('br');
    forms[0].insertBefore(newLineElement, lastFormElement); */
}

function destroyElements(elementToDelete) {
    elementToDelete.parentNode.removeChild(elementToDelete);

}