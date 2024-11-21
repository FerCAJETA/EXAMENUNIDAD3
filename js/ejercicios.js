//Ejercicio 1

const filas = parseInt(prompt("Introduce el número de filas: "));
const columnas = parseInt(prompt("Introduce el número de columnas: "));

let numero = filas * columnas;

let tabla = ""; 

for (let i = 0; i < filas; i++) {
    let fila = ""; 
    for (let j = 0; j < columnas; j++) {
        fila += numero.toString().padStart(4, " "); 
        numero--; 
    }
    tabla += fila + "\n";
}

console.log(tabla);


//Ejercicio 2


let nombre = prompt('Enter your name');
let age = prompt('Enter your age');

let nombre2 = prompt('Enter your name');
let age2 = prompt('Enter your age');

let nombre3 = prompt('Enter your name');
let age3 = prompt('Enter your age');

if (age > age2 && age > age3) {
    alert("El mayor es: " + nombre + " y su edad es: " + age);
} else {
    if (age2 > age3) {
        alert("El mayor es: " + nombre2 + " y su edad es: " + age2);
    } else {
        alert("El mayor es: " + nombre3 + " y su edad es: " + age3);
    }
}


