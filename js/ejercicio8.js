const numero= parseInt (prompt("Introduce numero entre 1 y 50"));

if (numero > 0 && numero <= 50) {
    
    for ( let filas = 1; filas <= numero; filas++) {
        
        for ( let columnas = 1; columnas <= filas; columnas++) {
            document.write(filas);
        }
        document.write("<br>")
    }
} 
else {
    alert("El número introducido no es válido");
}