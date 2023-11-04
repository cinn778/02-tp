const texto = prompt("Introduce un texto:");
const palabras = texto.length;    

for (let letra = 0; letra < palabras; letra++) {
    let caracter = texto.charAt(letra);   
    if (letra == palabras - 1) {
        document.write(caracter);
    }
    else {
        document.write(caracter + "-");
    }
}

