    function factorial (n) {
        var total = 1; 
        for (i=1; i<=n; i++) {
            total = total * i; 
        }
        document.write(total);
    } 


function multiplo(numero) {
    for (let i = 1; i <= numero; i++) {
        if (numero % 3 == 0 && numero % 5 == 0) {
            return true;
        }
    }
    return false;
}

function mostrarmultiplo(numero) {
    if (multiplo(numero)) {
        document.write(numero + " es un numero multiplo de 3 y 5")
    } else {
        document.write(numero + " no es un numero multiplo de 3 y 5")
    }
}
    
function decorador() {
    document.write("<br>");
}

window.onload = numero = prompt("Introduce el numero ");

window.onload = factorial(numero);
window.onload = decorador();
window.onload = mostrarmultiplo(numero);

