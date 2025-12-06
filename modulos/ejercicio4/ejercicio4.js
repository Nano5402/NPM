// ejercicio4.js

// Función para ordenar productos por precio
function ordenarProductos(productos) {
  // Creamos una copia para respetar la inmutabilidad
  const copia = [...productos];

  // Ordenamos de mayor a menor por precio
  const ordenados = copia.sort((a, b) => b.precio - a.precio);

  // El producto más caro será el primero
  const productoMaximo = ordenados[0];
  // El producto más barato será el último
  const productoMinimo = ordenados[ordenados.length - 1];

  // Retornamos un objeto con el arreglo ordenado y los extremos
  return {
    ordenados,
    productoMaximo,
    productoMinimo
  };
}

// Exportamos la función
export { ordenarProductos };
