import nombre from 'prompt-sync';
import { calcularPromedio, calcularSalarioBase, calcularDeducciones, calcularNeto } from './modulos/index.js';
const intro = nombre();


const prompt = nombre();

// // Pedimos al usuario la cantidad de notas que desea ingresar
// const cantidad = parseInt(prompt("¿Cuántas notas desea ingresar? "));

// // Creamos un arreglo vacío para almacenar las notas
// const notas = [];

// // Usamos un ciclo for para pedir cada nota al usuario
// for (let i = 0; i < cantidad; i++) {
//     const nota = parseFloat(prompt(`Ingrese la nota ${i + 1}: `));
//     notas.push(nota);
// }

// // Llamamos a la función calcularPromedio con el arreglo de notas
// const resultado = calcularPromedio(notas);

// // Mostramos el resultado en consola
// console.log(`Su promedio final es: ${resultado.promedio.toFixed(1)}\nRendimiento: ${resultado.rendimiento}`);

// Pedimos al usuario los datos
const valorHora = parseFloat(prompt("Ingrese el valor de la hora: "));
const horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas trabajadas: "));

// Usamos las funciones exportadas
const salarioBase = calcularSalarioBase(valorHora, horasTrabajadas);
const deducciones = calcularDeducciones(salarioBase);
const salarioNeto = calcularNeto(salarioBase, deducciones);

// Mostramos los resultados
console.log(`Salario base: $${salarioBase}`);
console.log(`Deducciones: $${deducciones}`);
console.log(`Salario neto: $${salarioNeto}`);
