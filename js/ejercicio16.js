const texto = prompt("Introduce un texto")
let resultado = ""
for ( let vuelts = 0; vuelts < texto.length; vuelts++){
     resultado= texto.charAt(vuelts) + resultado
}
document.write(resultado)