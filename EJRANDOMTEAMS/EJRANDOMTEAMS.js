// Hacer una lista con los nombres de los alumnos de la clase.
// Al hacer click en un boton cree 3 numeros randoms y vaya haciendo equipos de 3, si por casualidad no quedan suficientes personas y se queda una persona libre se hacen 2 
// equipos de 2 personas
let students = ["Pablo", "Gomez", "Edu", "Silvia", "Ruben", "Nieto", "Jesus", "Iker", "Aaron", "Castilla", "Adrian", "Sergio", "Carlos", "Juan Carlos"]

function generate() {
    let group = [];
    for (let i=0; i<3;i++) {
        group.push(getStudent(getRandom()));
    }
    showGroup(group);
}

function getRandom() {
    return 
}

function getStudent(index){
    let studentName = students[index];
    removeStudent(index);
    return studentName
}

function removeStudent(index) {

}

function showGroup () {

}