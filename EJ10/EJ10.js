function getNumber(){
    let dia = document.getElementById("day");
    displayWeekDay(dia.value);
}


function displayWeekDay (dia) {
    if (dia == 1) {
        window.alert("Lunes");
    } else if (dia == 2) {
        window.alert("Martes");
    } else if (dia == 3) {
        window.alert("Miercoles");
    } else if (dia == 4 ) {
        window.alert("Jueves");
    } else if (dia == 5) {
        window.alert("Viernes");
    } else if (dia == 6) {
        window.alert("Sabado");
    } else if (dia == 7) {
        window.alert("Domingo");
    } else {
        window.alert("Los dias son del 1 al 7");
    } 
}

function displayWeekDay2(number) {
    weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let dayOutput = document.getElementById("weekDay")
    dayç.textContent = weekDays [number -1];
}