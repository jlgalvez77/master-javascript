'use strict';
// VENTANAS
// Alerta
alert('Esta es mi alerta');

// Confirmación
var mi_resultado = confirm('¿Estás seguro de querer continuar?')
console.log(mi_resultado);

// Ingreso de datos
var mi_resultado = prompt('¿Qué edad tienes?', 18);
console.log(typeof mi_resultado); // String
console.log(mi_resultado); // 18
console.log(typeof Number(mi_resultado)); // Number