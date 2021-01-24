    // Crea nuevos elementos
function newElement(tag, text, parent, attributes) {
    let element = document.createElement(tag);
    if(text) {
        let txtNode = document.createTextNode(text);
        element.appendChild(txtNode);
    }

    if (attributes){
        for (const attribute in attributes) {
            const value = attributes[attribute];
            element.setAttribute(attribute, value);
        }
    }

    parent.appendChild(element);
}
// Llamamos a esta funcion para que vaya llamando a la funcion de crear varias veces
function wraper() {
    if (div.length < 1) { // Solo crea el formulario una vez
        newElement('h2', 'VIAJE', div);
        newElement('label', 'Nombre: ', div);
        newElement('input', 'undefined', div, {'type': 'text', 'name': 'Nombre'});
        newElement('br', 'undefined', div);
        newElement('label', 'Descripcion: ', div);
        newElement('input', 'undefined', div, {'type': 'text', 'name': 'Descripcion'});
        newElement('br', 'undefined', div);
        newElement('label', 'Moneda: ', div);
        newElement('select', 'undefined', div, {'name': 'Frutas', 'id': 'curList'});
        newElement('br', 'undefined', div);
        newElement('input', 'undefined', div, {'type': 'submit', 'value' : 'ENVIAR' ,'class' : 'button', 'accesskey' : 'e'});
        newElement('br', 'undefined', div);
        let optionsList = document.getElementById('curList');
        addItems(["Manzana", "Banana"], optionsList)
    }
}

// Crea opciones para dentro de un select con los valores que haya en un array
function addItems(items, list){
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        let option = document.createElement('option');
        option.appendChild(document.createTextNode(item));
        option.value = item;
        list.appendChild(option);
    }
}
