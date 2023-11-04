const nombre1 = prompt("Indique primer nombre")
const edad1 = parseInt(prompt("Indique primer edad"))

const nombre2 = prompt("Indique segundo nombre")
const edad2 = parseInt(prompt("Indique segunda edad"))

const nombre3 = prompt("Indique tercero nombre")
const edad3 = parseInt(prompt("Indique tercera edad"))

let mayor = Math.max(edad1, edad2, edad3)
if (mayor === edad1) {
    document.write("El mayor es: " + nombre1)
}if (mayor === edad2){
    document.write("El mayor es: " + nombre2)
}if (mayor === edad3){
    document.write("El mayor es: " + nombre3)
}
