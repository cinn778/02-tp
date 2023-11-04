// const frase = prompt("Ingrese una frase").toUpperCase();
// let contador = 0
// const lent = frase.length


// for(let textoFrase = 0; textoFrase < lent ; textoFrase++ ){
//     frase.charAt(textoFrase) 
//     if (
//   frase.charAt(textoFrase) == "a" ||
//   frase.charAt(textoFrase) == "e" ||
//   frase.charAt(textoFrase) == "i" ||
//   frase.charAt(textoFrase) == "o" ||
//   frase.charAt(textoFrase) == "u" 
// ) {
//     numero = contador + 1;
// }
// }
//     document.write("Número de vocales: "+ numero);
 const texto = prompt("Introduce una cadena de texto:").toUpperCase();
 const lent = texto.length;    
const contador = 0;
let cara =""

for ( let i = 0; i < lent; i++) {
        cara= texto.charAt(i)
    if ((cara == "A") || (cara== "E") || (cara == "I") || (cara == "O") || (cara == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador);