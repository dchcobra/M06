function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function dado() {
    const impares = [];
    for (let step = 0; step < 3; step++) {
        $num = getRandomInt(1, 15);
        impares.push($num);
    }

    for (let step = 0; step < impares.length; step++) {
        if (impares[step] % 2 != 0) {
            document.write(impares[step] + ',');
        }
    }

}

window.onload = dado();