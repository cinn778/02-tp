
const numero= parseInt (prompt("Introduce numero entre 1 y 50"));

if (numero > 0 && numero <= 50) {
    
    for ( let filas = numero; filas >= 1; filas--) {
        
        for ( let columnas = filas; columnas >= 1; columnas--) {
            document.write(filas);
        }
        
    }
} 
else {
    alert("El número introducido no es válido");
}