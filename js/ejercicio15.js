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

for ( let i = 0; i < lent; i++) {
        
    if ((texto.charAt(i) == "A") || (texto.charAt(i)== "E") || (texto.charAt(i)== "I") || (texto.charAt(i) == "O") || (texto.charAt(i) == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador);