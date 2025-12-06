import PromptSync from 'prompt-sync';
import { calcularPromedio, calcularInventario, calcularPromedio, ordenarProductos, validarUsuario} from './modulos/index.js';
const intro = nombre();


const prompt = PromptSync();

// Ejercicio 1
// Función que ejecuta el Ejercicio 1
function ejercicio1() {
  console.log("=== Ejercicio 1: Calcular promedio de notas ===");

  // Pedimos la cantidad de notas
  const cantidad = parseInt(prompt("¿Cuántas notas desea ingresar? "));

  // Creamos un arreglo vacío para almacenar las notas
  const notas = [];

  // Usamos un ciclo for para pedir cada nota
  for (let i = 0; i < cantidad; i++) {
    const nota = parseFloat(prompt(`Ingrese la nota #${i + 1}: `));
    notas.push(nota);
  }

  // Calculamos el promedio usando la función auxiliar
  const promedio = calcularPromedio(notas);

  // Mostramos el resultado
  console.log(`El promedio de las notas es: ${promedio.toFixed(2)}`);
}

// Ejecutamos directamente el ejercicio
ejercicio1();


// Ejercicio 2 
// Función que ejecuta la lógica del Ejercicio 2
function ejercicio2() {
  console.log("=== Ejercicio 2: Inventario con validación persistente ===");

  // Creamos un arreglo vacío para almacenar los productos
  const inventario = [];

  // Pedimos al usuario la cantidad de productos que desea registrar
  const cantidad = parseInt(prompt("¿Cuántos productos desea registrar? "));

  // Usamos un ciclo for para pedir los datos de cada producto
  for (let i = 0; i < cantidad; i++) {
    let nombre;
    let cantidadProducto;

    // Validación persistente: repetimos hasta que el usuario ingrese un nombre válido
    do {
      nombre = prompt(`Ingrese el nombre del producto #${i + 1}: `);
    } while (!nombre || nombre.trim() === "");

    // Validación persistente: repetimos hasta que el usuario ingrese una cantidad válida
    do {
      cantidadProducto = parseInt(prompt(`Ingrese la cantidad del producto "${nombre}": `));
    } while (isNaN(cantidadProducto) || cantidadProducto < 0);

    // Agregamos el producto al inventario
    inventario.push({ nombre, cantidad: cantidadProducto });
  }

  // Mostramos el inventario en consola
  console.log("Inventario registrado:");
  inventario.forEach(p => console.log(`${p.nombre}: ${p.cantidad}`));

  // Ejemplo de uso de la función auxiliar calcularInventario
  const cantidadInicial = parseInt(prompt("Ingrese cantidad inicial: "));
  const cantidadVendida = parseInt(prompt("Ingrese cantidad vendida: "));
  const cantidadRecibida = parseInt(prompt("Ingrese cantidad recibida: "));

  const resultado = calcularInventario(cantidadInicial, cantidadVendida, cantidadRecibida);
  console.log(resultado);
}

// Ejecutamos directamente el ejercicio
ejercicio2();

// Ejercicio 3
// Función que ejecuta la lógica del Ejercicio 3
function ejercicio3() {
  console.log("=== Ejercicio 3: Promedio de notas ===");

  // Pedimos al usuario la cantidad de notas
  const cantidad = parseInt(prompt("¿Cuántas notas desea ingresar? "));

  // Creamos un arreglo vacío para almacenar las notas
  const notas = [];

  // Usamos un ciclo for para pedir cada nota
  for (let i = 0; i < cantidad; i++) {
    const nota = parseFloat(prompt(`Ingrese la nota #${i + 1}: `));
    notas.push(nota);
  }

  // Llamamos a la función calcularPromedio
  const resultado = calcularPromedio(notas);

  // Mostramos el resultado en consola
  console.log(`Su promedio final es: ${resultado.promedio.toFixed(1)}`);
  console.log(`Rendimiento: ${resultado.rendimiento}`);
}

// Ejecutamos directamente el ejercicio
ejercicio3();


// Ejercicio 4
// Función que ejecuta la lógica del Ejercicio 4
function ejercicio4() {
  console.log("=== Ejercicio 4: Ordenamiento de precios ===");

  // Pedimos al usuario la cantidad de productos
  const cantidad = parseInt(prompt("¿Cuántos productos desea ingresar? "));

  // Creamos un arreglo vacío para almacenar los objetos
  const productos = [];

  // Usamos un ciclo for para pedir cada producto y su precio
  for (let i = 0; i < cantidad; i++) {
    const nombre = prompt(`Ingrese el nombre del producto #${i + 1}: `);
    const precio = parseFloat(prompt(`Ingrese el precio del producto "${nombre}": `));

    // Creamos un objeto y lo agregamos al arreglo
    productos.push({ nombre, precio });
  }

  // Llamamos a la función ordenarProductos con el arreglo de objetos
  const resultado = ordenarProductos(productos);

  // Mostramos los resultados en consola
  console.log("\nProductos originales:", productos);
  console.log("Productos ordenados (mayor a menor por precio):");
  resultado.ordenados.forEach(p => console.log(`${p.nombre}: $${p.precio}`));

  console.log(`\nProducto más caro: ${resultado.productoMaximo.nombre} ($${resultado.productoMaximo.precio})`);
  console.log(`Producto más barato: ${resultado.productoMinimo.nombre} ($${resultado.productoMinimo.precio})`);
}

// Ejecutamos directamente el ejercicio
ejercicio4();
// // Pedimos al usuario los datos
// const valorHora = parseFloat(prompt("Ingrese el valor de la hora: "));
// const horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas trabajadas: "));

// // Usamos las funciones exportadas
// const salarioBase = calcularSalarioBase(valorHora, horasTrabajadas);
// const deducciones = calcularDeducciones(salarioBase);
// const salarioNeto = calcularNeto(salarioBase, deducciones);

// // Mostramos los resultados
// console.log(`Salario base: $${salarioBase}`);
// console.log(`Deducciones: $${deducciones}`);
// console.log(`Salario neto: $${salarioNeto}`);
