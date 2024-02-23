'use strict';

// CONDICIONAL IF

var edad1 = 30;
var edad2 = 12;

if (edad1 > edad2) {
    console.log("Edad1 es mayor que Edad2");
} else {
    console.log("La Edad1 es inferior");
}

var edad = 18;
var nombre = "David Suarez";

// Operadores relacionales
// Mayor: >
// Menor: <
// Mayor o igual: >=
// Menor o igual: <=
// Igual: ==
// Distinto: !=

if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");
    if (edad <= 33) {
        console.log("Todavía eres millenial");
    } else if (edad >= 70) {
        console.log("Eres anciano");
    } else {
        console.log("Ya no eres millenial");
    }
}

// Operadores lógicos
// AND(Y): &&
// OR(O): ||
// Negación: !

// Negación
var year = 2024;
if (year != 2016) {
    console.log("El año no es 2016, realmente es: " + year);
}

// AND
if (year >= 2000 && year <= 2030) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era postmoderna");
}

// OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año acaba en 8");
} else {
    console.log("Año no registrado");
}