const vocales = ["a", "e", "i","o","u"];
const texto = prompt("Ingrese un texto").toLowerCase;
let posicion = 0;

for(let i = 0; i < texto.length; i++){

    if(vocales.includes(texto.charAt(i))){ posicion= i
        break;
    }
}

document.write("La primer vocal esta en la posicion: " + posicion)
